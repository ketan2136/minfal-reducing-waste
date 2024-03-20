// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPyJV1hLbTswT-JoZUVJbiDl6Tl4GpiwU",
  authDomain: "minfal.firebaseapp.com",
  projectId: "minfal",
  storageBucket: "minfal.appspot.com",
  messagingSenderId: "723738134461",
  appId: "1:723738134461:web:c880a01dd3e4c56646f4d4",
  measurementId: "G-8HKNJQD71T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);