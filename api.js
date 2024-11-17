import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  documentId,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAzPH3FpA-H-qKy9E_wie-U6u1fBUEdwNg",
  authDomain: "vanlife-dfbb2.firebaseapp.com",
  projectId: "vanlife-dfbb2",
  storageBucket: "vanlife-dfbb2.firebasestorage.app",
  messagingSenderId: "916817702801",
  appId: "1:916817702801:web:3345400a3e3936328d3430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection references
const vansCollectionRef = collection(db, "vans");
const docRef = doc(db, "vans", id);
