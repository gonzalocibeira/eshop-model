import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTkRwteQPmR48bp9bZTw0D1VMDu7TUA9c",
    authDomain: "react-eshop-model.firebaseapp.com",
    projectId: "react-eshop-model",
    storageBucket: "react-eshop-model.appspot.com",
    messagingSenderId: "219462985612",
    appId: "1:219462985612:web:80ef814ddb60bd05db98a9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);