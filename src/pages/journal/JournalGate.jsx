// Stricter guard for /journal. Even past the app-level AuthGate, the
// signed-in user's email is double-checked against ALLOWED_EMAILS. If
// they don't match (e.g. someone got in via a wider Firestore list) we
// sign them out and show a clean "Access denied" screen.
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../lib/firebase.js';
import { isAllowedEmail } from '../../lib/authConfig.js';

const provider = new GoogleAuthProvider();

export default function JournalGate({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(null);
        setDenied(false);
        setLoading(false);
        return;
      }
      if (!isAllowedEmail(u.email)) {
        await signOut(auth);
        setUser(null);
        setDenied(true);
        setError(`Access denied for ${u.email}. The journal is restricted.`);
        setLoading(false);
        return;
      }
      setUser(u);
      setDenied(false);
      setError('');
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleSignIn = async () => {
    setError('');
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err && err.code !== 'auth/popup-closed-by-user') {
        setError(err.message || 'Sign-in failed.');
      }
    }
  };

  if (loading) {
    return (
      <div style={shellStyle}>
        <div style={{ color: '#94a3b8', fontFamily: 'Space Mono, monospace', fontSize: 14 }}>
          Verifying access...
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={shellStyle}>
        <div style={cardStyle}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🔒</div>
          <h1 style={{
            margin: 0,
            marginBottom: 8,
            fontFamily: '"Oxanium", "Space Grotesk", system-ui, sans-serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#f5f5f7',
            letterSpacing: '0.02em',
          }}>
            Personal Journal
          </h1>
          <p style={{
            margin: 0,
            marginBottom: 24,
            fontFamily: '"Space Mono", monospace',
            fontSize: 12,
            lineHeight: 1.6,
            color: '#94a3b8',
            letterSpacing: '0.03em',
          }}>
            Private reflections. Sign in with an authorized Google account to continue.
          </p>
          <button onClick={handleSignIn} style={signInButtonStyle}>
            Sign in with Google
          </button>
          {denied && error && (
            <p style={{
              margin: 0,
              marginTop: 16,
              fontFamily: '"Space Mono", monospace',
              fontSize: 11,
              color: 'rgba(239, 68, 68, 0.85)',
              lineHeight: 1.5,
            }}>
              {error}
            </p>
          )}
          {!denied && error && (
            <p style={{
              margin: 0,
              marginTop: 16,
              fontFamily: '"Space Mono", monospace',
              fontSize: 11,
              color: '#f59e0b',
              lineHeight: 1.5,
            }}>
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

const shellStyle = {
  minHeight: '100vh',
  width: '100%',
  background: '#0a0a0f',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
};

const cardStyle = {
  background: '#14141a',
  border: '1px solid #2a2a35',
  borderRadius: 12,
  padding: '2.5rem 2rem',
  maxWidth: 380,
  width: '100%',
  textAlign: 'center',
};

const signInButtonStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: '#f59e0b',
  color: '#0a0a0f',
  border: 'none',
  borderRadius: 8,
  fontFamily: '"Oxanium", system-ui, sans-serif',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.04em',
  cursor: 'pointer',
};
