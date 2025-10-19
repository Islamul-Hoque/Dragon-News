import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFogxesQ8W4HASqHqgCgXNQ1uFVJaa99E",
    authDomain: "dragon-news-breaking-3233f.firebaseapp.com",
    projectId: "dragon-news-breaking-3233f",
    storageBucket: "dragon-news-breaking-3233f.firebasestorage.app",
    messagingSenderId: "827884431823",
    appId: "1:827884431823:web:9180884c631fcbbd810aba"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)