
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
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
export const provider = new FacebookAuthProvider();
export default auth;
