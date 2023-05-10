// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { dameTodaLaData } from "../crud";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn647yaenY5dkuNRaEmn3M5eRVauUNaig",
  authDomain: "reactjs-e-commerce-bc002.firebaseapp.com",
  projectId: "reactjs-e-commerce-bc002",
  storageBucket: "reactjs-e-commerce-bc002.appspot.com",
  messagingSenderId: "1019928168180",
  appId: "1:1019928168180:web:ff3bfc64e6e366cf6d80a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

console.log("Data de firestore:",db)