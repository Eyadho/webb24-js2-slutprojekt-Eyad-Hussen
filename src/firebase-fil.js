// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSnDdLKEY1lY5G5aEB1jm9ba36-fTaYPY",
    authDomain: "js2-slutprojekt-db.firebaseapp.com",
    projectId: "js2-slutprojekt-db",
    storageBucket: "js2-slutprojekt-db.appspot.com",
    messagingSenderId: "411959574892",
    appId: "1:411959574892:web:2273d3325d4fc6baa3b349",
    measurementId: "G-J6ZS9KGH9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};