import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5ofVfm35SxUZqDw14V9REm3iIGqL85nU",
    authDomain: "coleman-visuals.firebaseapp.com",
    projectId: "coleman-visuals",
    storageBucket: "coleman-visuals.appspot.com",
    messagingSenderId: "988675563630",
    appId: "1:988675563630:web:bf0e4b7180f854bcc7c67f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);