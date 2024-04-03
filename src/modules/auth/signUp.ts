import { authServices } from '../api/auth';

export const signUp = (gameInit: () => void) => {
    const form = document.querySelector('#auth-sign-up-form') as HTMLElement;
    // Errors
    const emailError = document.querySelector('#sign-up-error-email') as HTMLElement;
    const nickError = document.querySelector('#sign-up-error-nick') as HTMLElement;
    const passwordError = document.querySelector('#sign-up-error-password') as HTMLElement;
    const passwordRepeatError = document.querySelector('#sign-up-error-password-repeat') as HTMLElement;
    const generalError = document.querySelector('#sign-up-error-general') as HTMLElement;
    // Inputs
    const emailInput = document.querySelector('#sign-up-email') as HTMLInputElement;
    const nickInput = document.querySelector('#sign-up-nick') as HTMLInputElement;
    const passwordInput = document.querySelector('#sign-up-password') as HTMLInputElement;
    const passwordRepeatInput = document.querySelector('#sign-up-password-repeat') as HTMLInputElement;

    // TODO before release: make more detailed
    const validateEmail = (): boolean => {
        return true;
        // return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value);
    };
    const validateNick = (): boolean => {
        return true;
        // return nickInput.value.length > 3;
    };
    const validatePasswordRepeatInput = () => {
        return true;
        // return passwordInput.value.length === passwordRepeatInput.value.length;
    };
    const validatePassword = () => {
        return true;
    };

    const createNewAccount = () => {
        authServices.signUp({
            email: emailInput.value,
            password: passwordInput.value,
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail();
        const isNickValid = validateNick();
        const isPasswordRepeatValid = validatePasswordRepeatInput();
        const isPasswordValid = validatePassword();
        const isFormValid = isEmailValid && isNickValid && isPasswordValid && isPasswordRepeatValid;

        if (isFormValid) {
            createNewAccount();
            return;
        }

    });
};