import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLemYsnsnhVsEMHWXhaEXbBQHkqkoDq_o",
    authDomain: "chatapp-949db.firebaseapp.com",
    projectId: "chatapp-949db",
    storageBucket: "chatapp-949db.appspot.com",
    messagingSenderId: "194994371525",
    appId: "1:194994371525:web:0bbc85ace07095869269ac"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();