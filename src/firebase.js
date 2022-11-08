import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6eiocRt84rS714g48Cbdu5kSffapLE2Q",
  authDomain: "chatapplication-ee580.firebaseapp.com",
  projectId: "chatapplication-ee580",
  storageBucket: "chatapplication-ee580.appspot.com",
  messagingSenderId: "978091730307",
  appId: "1:978091730307:web:2c4951097b4556504f82b6",
  measurementId: "G-1LZDPJ0YF6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
