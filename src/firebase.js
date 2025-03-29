// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdLjPg4-r483H-rm0dcn3Naqqw0J0OpIY",
    authDomain: "surventix-98bf0.firebaseapp.com",
    projectId: "surventix-98bf0",
    storageBucket: "surventix-98bf0.firebasestorage.app",
    messagingSenderId: "197681874646",
    appId: "1:197681874646:web:216a6710140574ebf7ab77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
