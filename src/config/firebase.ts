// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKqMUg9jxXkfdCZcNc2DHeW6xA19lJq5k",
  authDomain: "socialmedia-a13f8.firebaseapp.com",
  projectId: "socialmedia-a13f8",
  storageBucket: "socialmedia-a13f8.appspot.com",
  messagingSenderId: "336302072741",
  appId: "1:336302072741:web:ab62f9a9cc83d39e687e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app); 
export const storage=getStorage(app);