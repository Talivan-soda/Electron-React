// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "coderreact-d3b1d.firebaseapp.com",
  projectId: "coderreact-d3b1d",
  storageBucket: "coderreact-d3b1d.firebasestorage.app",
  messagingSenderId: "224162920042",
  appId: "1:224162920042:web:a5ffdd9cecb0cfe6cfbc13",
  measurementId: "G-70557ESRLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);