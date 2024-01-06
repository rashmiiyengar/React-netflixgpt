// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD623IapOj5jmALPk7SAbl-yey3Q4w8X64",
  authDomain: "netflixgpt-cc383.firebaseapp.com",
  projectId: "netflixgpt-cc383",
  storageBucket: "netflixgpt-cc383.appspot.com",
  messagingSenderId: "974752730092",
  appId: "1:974752730092:web:5017712f8759e2a3d04ec9",
  measurementId: "G-F0EQDHMTEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


///Auth
export  const auth = getAuth();