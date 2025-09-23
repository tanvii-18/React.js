import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVPkqh7hYEhxthMrfEq_H-seAxOFx3GDM",
  authDomain: "chat-app-d84f2.firebaseapp.com",
  projectId: "chat-app-d84f2",
  storageBucket: "chat-app-d84f2.firebasestorage.app",
  messagingSenderId: "95759532045",
  appId: "1:95759532045:web:1a1d4c78c5892428975544",
  measurementId: "G-KMF49CY7S2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
