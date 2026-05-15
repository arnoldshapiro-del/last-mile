import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './lib/firebase.js';
import { isAllowedEmail } from './lib/authConfig.js';

export default function AuthGate({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) { setUser(null); setLoading(false); return; }
      if (!isAllowedEmail(u.email)) {
        setError(`Access denied for ${u.email}.`);
        await signOut(auth);
        setUser(null);
      } else {
        setUser(u);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleLogin = async () => {
    setError('');
    try { await signInWithPopup(auth, googleProvider); }
    catch (e) { if (e?.code !== 'auth/popup-closed-by-user') setError(e?.message || 'Sign-in failed'); }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#888', fontFamily: 'Inter, system-ui, sans-serif' }}>
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0a 0%, #161616 100%)', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <div style={{ background: '#161616', padding: '2.5rem 2rem', borderRadius: 14, border: '1px solid #262626', maxWidth: 380, width: '90%', textAlign: 'center', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔒</div>
          <h1 style={{ color: '#e8e8e8', fontSize: '1.4rem', margin: '0 0 0.4rem 0', fontWeight: 700, fontFamily: 'Oxanium, sans-serif' }}>Last Mile</h1>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1.6rem', lineHeight: 1.5 }}>
            Private. Sign in with the authorized Google account.
          </p>
          <button
            onClick={handleLogin}
            style={{ background: '#00D9A0', color: '#000', border: 'none', padding: '0.75rem 1.5rem', borderRadius: 10, fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', width: '100%', boxShadow: '0 0 24px rgba(0, 217, 160, 0.25)', fontFamily: 'Oxanium, sans-serif' }}
          >
            Sign in with Google
          </button>
          {error && <p style={{ color: '#FF3D5A', fontSize: '0.8rem', marginTop: '1rem' }}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: 'fixed', top: 8, right: 8, zIndex: 99999, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(10, 10, 10, 0.85)', padding: '5px 10px', borderRadius: 8, border: '1px solid #262626', backdropFilter: 'blur(8px)' }}>
        {user.photoURL && <img src={user.photoURL} alt="" style={{ width: 22, height: 22, borderRadius: '50%' }} />}
        <span style={{ color: '#e8e8e8', fontSize: '0.7rem', maxWidth: 110, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {user.displayName || user.email}
        </span>
        <button
          onClick={() => signOut(auth)}
          style={{ background: 'transparent', color: '#888', border: '1px solid #262626', padding: '2px 7px', borderRadius: 4, fontSize: '0.65rem', cursor: 'pointer' }}
        >
          Out
        </button>
      </div>
      {children}
    </>
  );
}
