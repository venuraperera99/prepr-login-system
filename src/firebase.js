// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR69hJaJGDKZTwKMGsVitLT2LyWXmWmV4",
    authDomain: "prepr-login-69a33.firebaseapp.com",
    projectId: "prepr-login-69a33",
    storageBucket: "prepr-login-69a33.appspot.com",
    messagingSenderId: "861583089519",
    appId: "1:861583089519:web:28f8c73e8cfaf72a17929a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth object from the initialized app
export const auth = getAuth(app);
export default app;