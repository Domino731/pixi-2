import { firebaseAuth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            // Signed up
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};


export const authServices = {
    signUp,
};