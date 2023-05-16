// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiCOYOdb0rFvU6iKRTHHwp5Cou_uUO6zs",
  authDomain: "netflix-react-2fc61.firebaseapp.com",
  projectId: "netflix-react-2fc61",
  storageBucket: "netflix-react-2fc61.appspot.com",
  messagingSenderId: "124883672956",
  appId: "1:124883672956:web:4f1cc181f296d4e4350ef9",
  measurementId: "G-BKFYK9ZT9D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)