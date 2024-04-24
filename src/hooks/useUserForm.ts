import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"

type UserFormData = {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    phone: number;
    address: string;
    occupation: string;
    institution: string;
    reason: string;
    timeDownloaded: Date;
    kpID: string;
    kpTitle: string;
}

export const useUserForm = () => {
    const collectionUserFormRef = collection(db, "userDownloads")
    
    const addUser = async(userData: UserFormData) => {
        await addDoc(collectionUserFormRef, userData);
    }

    return { addUser }
}