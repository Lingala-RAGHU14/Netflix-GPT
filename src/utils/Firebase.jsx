// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDemIBC6S10Hom2LI3XCneSn5QFNpc1sus",
  authDomain: "netflixgpt-d36b7.firebaseapp.com",
  projectId: "netflixgpt-d36b7",
  storageBucket: "netflixgpt-d36b7.firebasestorage.app",
  messagingSenderId: "350973861432",
  appId: "1:350973861432:web:df0b9e25ee1d2eac2110cd",
  measurementId: "G-0LRSR71CGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()