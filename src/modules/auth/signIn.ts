export const signIn = () => {
    const form = document.querySelector('#auth-sign-in-form') as HTMLFormElement;
    const error = document.querySelector('#auth-sign-in-form-error') as HTMLElement;
    const emailInput = document.querySelector('#sign-in-email') as HTMLElement;
    const passwordInput = document.querySelector('#sign-in-password') as HTMLElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log({
            emailInput,
            passwordInput,
        });
        error.style.display = 'block';
    });
};