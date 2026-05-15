// Single source of truth for who is allowed to sign in to Last Mile.
// Whitelist applies app-wide AND specifically to the locked /journal route.
// Mirrors the shared list in unis-ta-bootcamp-day1 so both apps stay in sync.
export const ALLOWED_EMAILS = Object.freeze([
  'arnold.shapiro@gmail.com',
  'mshapiro@sibcycline.com',
]);

export function isAllowedEmail(email) {
  if (!email) return false;
  return ALLOWED_EMAILS.includes(String(email).toLowerCase().trim());
}
