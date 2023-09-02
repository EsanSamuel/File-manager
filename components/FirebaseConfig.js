// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO2epH4FO9veh0Zjc5F2USGiP91y2tqAE",
    authDomain: "file-manager-5a396.firebaseapp.com",
    projectId: "file-manager-5a396",
    storageBucket: "file-manager-5a396.appspot.com",
    messagingSenderId: "819717957875",
    appId: "1:819717957875:web:eb57b90221e62dd8ddef86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
