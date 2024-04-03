import { signUp } from './signUp';
import { signIn } from './signIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../api/firebase';

const signInContainer = document.querySelector('#auth-sign-in-form') as HTMLElement;
const signUpContainer = document.querySelector('#auth-sign-up-form') as HTMLElement;
const passwordRecoveryContainer = document.querySelector('#auth-password-recovery-form') as HTMLElement;
const authContainer = document.querySelector('#auth') as HTMLElement;

const toggleForms = () => {
    // Handle forms toggling


    const siqnInLinks = document.querySelectorAll('.jsLinkSignIn');
    const siqnUpLinks = document.querySelectorAll('.jsLinkSignUp');
    const passwordRecoveryLinks = document.querySelectorAll('.jsLinkPasswordRecovery');

    siqnInLinks.forEach(el => el.addEventListener('click', () => {
        signInContainer.style.display = 'block';
        signUpContainer.style.display = 'none';
        passwordRecoveryContainer.style.display = 'none';
    }));
    siqnUpLinks.forEach(el => el.addEventListener('click', () => {
        signInContainer.style.display = 'none';
        signUpContainer.style.display = 'block';
        passwordRecoveryContainer.style.display = 'none';
    }));
    passwordRecoveryLinks.forEach(el => el.addEventListener('click', () => {
        signInContainer.style.display = 'none';
        signUpContainer.style.display = 'none';
        passwordRecoveryContainer.style.display = 'block';
    }));
};

const onAuthChange = (gameInit: () => void) => {
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            gameInit();
            authContainer.style.display = 'none';
        } else {
            alert('User has signed out');
        }
    });
};

export const auth = (gameInit: () => void) => {
    onAuthChange(gameInit);
    toggleForms();
    signUp(gameInit);
    signIn();
};