import { firebaseAuth, firestoreApi } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { profileServices } from './profile';

const signUp = async({email, password}: {email: string, password: string}) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((data) => {
        const userId = data.user.uid;
        profileServices.createNewProfile({userId});
    });
};


export const authServices = {
    signUp,
};