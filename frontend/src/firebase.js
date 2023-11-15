// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "real-estate-x-5bfe5.firebaseapp.com",
  projectId: "real-estate-x-5bfe5",
  storageBucket: "real-estate-x-5bfe5.appspot.com",
  messagingSenderId: "900242459963",
  appId: "1:900242459963:web:a11038496f31b617497b1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);