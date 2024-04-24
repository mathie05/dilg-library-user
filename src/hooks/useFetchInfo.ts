import { db } from "../firebase/config";
import { KPInfo } from "../types/interfaces";
import { collection, onSnapshot, query, Unsubscribe } from "firebase/firestore";

export const useFetchInfo = (setInfo: (info: KPInfo[]) => void): Unsubscribe => {
  try {
    const kpRefs = ["eBooks", "journals", "reports"];
    const unsubscribes: Unsubscribe[] = [];

    const combinedFetchedInfo: KPInfo[] = [];

    kpRefs.forEach((kpRef) => {
      const collectionRef = collection(db, kpRef);
      const unsubscribe = onSnapshot(query(collectionRef), (snapshot) => {
        const fetchedInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as KPInfo[];
        
        combinedFetchedInfo.push(...fetchedInfo);
      
        setInfo(combinedFetchedInfo);
      });
      unsubscribes.push(unsubscribe);
    });

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  } catch (error) {
    console.log("useFetchInfo Error: ", error)
    return () => {};
  }
};
