import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSnDdLKEY1lY5G5aEB1jm9ba36-fTaYPY",
    authDomain: "js2-slutprojekt-db.firebaseapp.com",
    projectId: "js2-slutprojekt-db",
    storageBucket: "js2-slutprojekt-db.firebasestorage.app",
    messagingSenderId: "411959574892",
    appId: "1:411959574892:web:62505a721793a22fa3b349",
    measurementId: "G-T0N5TGBW6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect Firestore
export const db = getFirestore(app);
