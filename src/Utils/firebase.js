// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZzycem-QgwDeZohDIZyFBD61-4iYejJc",
  authDomain: "netflixclone-9de86.firebaseapp.com",
  projectId: "netflixclone-9de86",
  storageBucket: "netflixclone-9de86.appspot.com",
  messagingSenderId: "901185211072",
  appId: "1:901185211072:web:ab85b79b5f452efd68bb25", 
  measurementId: "G-5RJ29NHS5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();