// firebase.init.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM1Ei-hAPM0XjnlPBYW7tk9g1LV-2l5i0",
  authDomain: "simple-firebase-40440.firebaseapp.com",
  projectId: "simple-firebase-40440",
  storageBucket: "simple-firebase-40440.appspot.com",
  messagingSenderId: "806953206030",
  appId: "1:806953206030:web:ef3c381341c446e3e7d75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;