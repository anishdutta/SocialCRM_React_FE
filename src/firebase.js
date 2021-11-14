// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
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
const storage = getStorage(app);
const signOutUser = ()=>{
  signOut(auth).then(() => {
    console.log('Signed Out');
  }).catch((error) => {
    console.error('Sign Out Error', error);
  });
  // window.location.reload()
  window.location.replace('/')
}
export { auth, analytics, db,signOutUser,storage };
