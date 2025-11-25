import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzYmh0As2vpZMFqZM5_auFLtQT9dfIvt4",
  authDomain: "my-portfolio-6c399.firebaseapp.com",
  projectId: "my-portfolio-6c399",
  storageBucket: "my-portfolio-6c399.firebasestorage.app",
  messagingSenderId: "828339078150",
  appId: "1:828339078150:web:ce700312c5e6c4c1cb6f87",
  measurementId: "G-E38CJ2BFYY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}