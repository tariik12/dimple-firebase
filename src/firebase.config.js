// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_oCDJH-J_BOrIAAuY0n8ONDK2e119A9A",
  authDomain: "dimple-firebase-ac4d2.firebaseapp.com",
  projectId: "dimple-firebase-ac4d2",
  storageBucket: "dimple-firebase-ac4d2.appspot.com",
  messagingSenderId: "430524322602",
  appId: "1:430524322602:web:27963d6c7c59241c370453",
  measurementId: "G-TH16BY6XBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;