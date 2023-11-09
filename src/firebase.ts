import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASHROUuYjsEofgnExbZ74iJdURZH8-Mrk",
  authDomain: "nwitter-reloaded-ecb9b.firebaseapp.com",
  projectId: "nwitter-reloaded-ecb9b",
  storageBucket: "nwitter-reloaded-ecb9b.appspot.com",
  messagingSenderId: "703145716612",
  appId: "1:703145716612:web:c797434847bd43253b0bd1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);