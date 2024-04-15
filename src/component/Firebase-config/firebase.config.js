// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMkhdju46eCVpU-DInkm4UkM6uRiWga7k",
  authDomain: "real-estate-residence.firebaseapp.com",
  projectId: "real-estate-residence",
  storageBucket: "real-estate-residence.appspot.com",
  messagingSenderId: "483292519413",
  appId: "1:483292519413:web:f4b0a1bb16c406eb5a9ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;