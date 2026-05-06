// Firebase config — points to the SAME shapiro-apps project as the Bootcamp,
// so both apps share the journal_entries collection.
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBWKpWwPRFqjSxCmxSBpqZjLenlL7B7REU',
  authDomain: 'shapiro-apps.firebaseapp.com',
  projectId: 'shapiro-apps',
  storageBucket: 'shapiro-apps.firebasestorage.app',
  messagingSenderId: '33734446646',
  appId: '1:33734446646:web:1d7df4012cf441b1c45297'
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
