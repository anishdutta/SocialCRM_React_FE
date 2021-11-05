// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRTn2sr-PBnPmYVZohvEkSN0jaYGoE0XA",
  authDomain: "sociophin.firebaseapp.com",
  projectId: "sociophin",
  storageBucket: "sociophin.appspot.com",
  messagingSenderId: "278284290604",
  appId: "1:278284290604:web:5efe9ea6817580d5d0df89",
  measurementId: "G-40724PNHTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
export { auth, analytics, db };
