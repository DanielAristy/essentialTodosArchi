import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6w9F9X5BiqRFVKRU0znibYtoIxr7zL5I",
    authDomain: "fir-todohexa.firebaseapp.com",
    projectId: "fir-todohexa",
    storageBucket: "fir-todohexa.appspot.com",
    messagingSenderId: "726252018567",
    appId: "1:726252018567:web:08493de75a8fa722301122",
    measurementId: "G-7657KMQZ5E"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const firestore = firebase.firestore;