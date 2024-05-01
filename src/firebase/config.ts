import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
/* Get Firebase API Configuration by creating a Firebase Project at https://firebase.google.com/ */
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }