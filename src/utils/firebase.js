// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD-3KLfb6tVpPxUPeAln--U5nezacRu-8",
  authDomain: "netflixgpt-2b6ca.firebaseapp.com",
  projectId: "netflixgpt-2b6ca",
  storageBucket: "netflixgpt-2b6ca.firebasestorage.app",
  messagingSenderId: "173060391016",
  appId: "1:173060391016:web:78acafc45b197dc6c33bdd",
  measurementId: "G-T5TPPYBMRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();