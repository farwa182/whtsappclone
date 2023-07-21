import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOA6bWI0lic7dzbablyjuPyTbMqt4X0rs",
  authDomain: "new-proj-4af33.firebaseapp.com",
  projectId: "new-proj-4af33",
  storageBucket: "new-proj-4af33.appspot.com",
  messagingSenderId: "705618132368",
  appId: "1:705618132368:web:acea3e4ea1b9d522bcc715"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
