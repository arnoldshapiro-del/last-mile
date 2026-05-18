// Netlify Function: save-lessons (Last Mile mirror)
//
// Identical to the function deployed on unis-ta-bootcamp-day1 — both
// apps write to the SAME `arnoldshapiro-del/unis-ta-bootcamp-day1` repo
// under `public/lessons/`. Last Mile's function exists so its button
// can save without a cross-origin call.
//
// Accepts POST { lessons: <single lesson object | array of lessons> }.
// Validates per docs/LESSON_JSON_SCHEMA.md, routes each lesson to
//   public/lessons/{category}/{lesson_id}-{subcategory}.json
// upserts public/lessons/index.json, and commits all files in ONE
// atomic commit to GitHub via the Git Database API.
//
// Required env vars (set in Netlify site settings → Environment):
//   GITHUB_TOKEN  — fine-grained PAT with Contents: write on the target repo
//
// Optional env vars (defaults below):
//   GITHUB_OWNER  — default 'arnoldshapiro-del'
//   GITHUB_REPO   — default 'unis-ta-bootcamp-day1'  (data home)
//   GITHUB_BRANCH — default 'master'

const DEFAULT_OWNER  = 'arnoldshapiro-del';
const DEFAULT_REPO   = 'unis-ta-bootcamp-day1';
const DEFAULT_BRANCH = 'master';

const VALID_CATEGORIES = ['brooks', 'tape_reading', 'general', 'psychology', 'risk'];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function normalize(lesson, i) {
  const out = { ...lesson };
  if (!out.lesson_id) return { error: `lesson #${i + 1} missing lesson_id` };
  if (!out.date)      return { error: `lesson_id ${out.lesson_id} missing date` };
  if (!VALID_CATEGORIES.includes(out.category)) {
    out.category = 'general';
  }
  if (!out.subcategory || typeof out.subcategory !== 'string') {
    out.subcategory = 'other';
  }
  return { ok: out };
}

async function gh(url, token, init = {}) {
  const res = await fetch(`https://api.github.com${url}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'save-lessons-netlify-fn',
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub ${init.method || 'GET'} ${url} → ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

async function fetchExistingIndex(owner, repo, branch, token) {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/public/lessons/index.json`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : [];
  } catch {
    return [];
  }
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed. Use POST.' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return jsonResponse(500, {
      error: 'Server is not configured: GITHUB_TOKEN env var is missing. Set it in the Netlify site Environment settings.',
    });
  }
  const owner  = process.env.GITHUB_OWNER  || DEFAULT_OWNER;
  const repo   = process.env.GITHUB_REPO   || DEFAULT_REPO;
  const branch = process.env.GITHUB_BRANCH || DEFAULT_BRANCH;

  let body;
  try { body = await req.json(); }
  catch (e) { return jsonResponse(400, { error: `Body is not valid JSON: ${e.message}` }); }

  const raw = body?.lessons;
  if (raw == null) return jsonResponse(400, { error: 'Missing "lessons" field.' });

  const lessons = Array.isArray(raw) ? raw : [raw];
  if (lessons.length === 0) return jsonResponse(400, { error: 'Lessons array is empty.' });

  const normalized = [];
  const warnings = [];
  for (let i = 0; i < lessons.length; i++) {
    const result = normalize(lessons[i], i);
    if (result.error) { warnings.push(result.error); continue; }
    normalized.push(result.ok);
  }
  if (normalized.length === 0) {
    return jsonResponse(400, { error: 'All lessons failed validation.', warnings });
  }

  const perCategoryCount = {};
  const filesToCommit = [];

  let index = await fetchExistingIndex(owner, repo, branch, token);
  for (const l of normalized) {
    const filename = `${l.lesson_id}-${l.subcategory}.json`;
    const relPath  = `public/lessons/${l.category}/${filename}`;
    const text     = JSON.stringify(l, null, 2) + '\n';
    filesToCommit.push({ path: relPath, contentText: text });
    perCategoryCount[l.category] = (perCategoryCount[l.category] || 0) + 1;

    const row = {
      lesson_id:    l.lesson_id,
      date:         l.date,
      session_time: l.session_time ?? null,
      category:     l.category,
      subcategory:  l.subcategory,
      method_used:  l.method_used ?? null,
      instrument:   l.instrument ?? null,
      outcome:      l.outcome ?? null,
      pnl_dollars:  typeof l.pnl_dollars === 'number' ? l.pnl_dollars : null,
      key_lesson:   l.key_lesson ?? '',
      path:         `lessons/${l.category}/${filename}`,
    };
    const existing = index.findIndex(r => r.lesson_id === l.lesson_id);
    if (existing >= 0) index[existing] = row;
    else               index.push(row);
  }
  index.sort((a, b) => (b.lesson_id || '').localeCompare(a.lesson_id || ''));
  filesToCommit.push({
    path: 'public/lessons/index.json',
    contentText: JSON.stringify(index, null, 2) + '\n',
  });

  try {
    const ref = await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, token);
    const headSha = ref.object.sha;
    const headCommit = await gh(`/repos/${owner}/${repo}/git/commits/${headSha}`, token);
    const baseTreeSha = headCommit.tree.sha;

    const treeEntries = [];
    for (const f of filesToCommit) {
      const blob = await gh(`/repos/${owner}/${repo}/git/blobs`, token, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: Buffer.from(f.contentText, 'utf8').toString('base64'),
          encoding: 'base64',
        }),
      });
      treeEntries.push({
        path: f.path,
        mode: '100644',
        type: 'blob',
        sha: blob.sha,
      });
    }

    const newTree = await gh(`/repos/${owner}/${repo}/git/trees`, token, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        base_tree: baseTreeSha,
        tree: treeEntries,
      }),
    });

    const breakdown = Object.entries(perCategoryCount)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([cat, n]) => `${cat}=${n}`)
      .join(', ');
    const msg = `Save ${normalized.length} lesson${normalized.length === 1 ? '' : 's'} via Last Mile save button [${breakdown}]`;
    const newCommit = await gh(`/repos/${owner}/${repo}/git/commits`, token, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: msg,
        tree: newTree.sha,
        parents: [headSha],
      }),
    });

    await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, token, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sha: newCommit.sha, force: false }),
    });

    return jsonResponse(200, {
      ok: true,
      saved: normalized.length,
      breakdown: perCategoryCount,
      warnings,
      commit_sha: newCommit.sha,
      commit_url: `https://github.com/${owner}/${repo}/commit/${newCommit.sha}`,
      branch,
    });
  } catch (err) {
    return jsonResponse(502, {
      error: `GitHub commit failed: ${err.message || String(err)}`,
      warnings,
    });
  }
}

export const config = {
  path: '/.netlify/functions/save-lessons',
};
