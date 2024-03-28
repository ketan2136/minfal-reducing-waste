// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDPyJV1hLbTswT-JoZUVJbiDl6Tl4GpiwU",
  authDomain: "minfal.firebaseapp.com",
  projectId: "minfal",
  storageBucket: "minfal.appspot.com",
  messagingSenderId: "723738134461",
  appId: "1:723738134461:web:c880a01dd3e4c56646f4d4",
  measurementId: "G-8HKNJQD71T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const textDB = getFirestore(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export {textDB,db}