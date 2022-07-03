// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo7ksFJGvKDxzDIFkVmV_N69dVGfTSzL4",
  authDomain: "node-crud-1801d.firebaseapp.com",
  projectId: "node-crud-1801d",
  storageBucket: "node-crud-1801d.appspot.com",
  messagingSenderId: "969113373487",
  appId: "1:969113373487:web:942fac01902453da99afda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export  {db};