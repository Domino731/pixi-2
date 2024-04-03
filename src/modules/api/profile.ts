import { collection, addDoc } from "firebase/firestore"; 
import { firestoreApi } from "./firebase";

const createNewProfile = async ({userId}: {userId: string}) => {
return addDoc(collection(firestoreApi, "profiles"), {
    userId
  });
}

export const profileServices = {
    createNewProfile
}