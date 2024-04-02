import 'pixi-spine';

import { Application, Sprite } from 'pixi.js';
import { initAssets } from './utils/assets';
import { Navigation } from './utils/navigation';
import { sound } from '@pixi/sound';
import { CityMap } from './new/screens/MapScreens/Map';

/** The PixiJS app Application instance, shared across the project */
export const app = new Application<HTMLCanvasElement>({
    resolution: Math.max(window.devicePixelRatio, 2),
    backgroundColor: 0xffffff,
});
export const createAppTexture = (data: Sprite) => app.renderer.generateTexture(data);

export const navigation = new Navigation();

/** Set up a resize function for the app */
function resize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const minWidth = 375;
    const minHeight = 700;

    // Calculate renderer and canvas sizes based on current dimensions
    const scaleX = windowWidth < minWidth ? minWidth / windowWidth : 1;
    const scaleY = windowHeight < minHeight ? minHeight / windowHeight : 1;
    const scale = scaleX > scaleY ? scaleX : scaleY;
    const width = windowWidth * scale;
    const height = windowHeight * scale;

    // Update canvas style dimensions and scroll window up to avoid issues on mobile resize
    app.renderer.view.style.width = `${windowWidth}px`;
    app.renderer.view.style.height = `${windowHeight}px`;
    window.scrollTo(0, 0);

    // Update renderer  and navigation screens dimensions
    app.renderer.resize(width, height);
    navigation.resize(width, height);
}

/** Fire when document visibility changes - lose or regain focus */
function visibilityChange() {
    if (document.hidden) {
        sound.pauseAll();
        navigation.blur();
    } else {
        sound.resumeAll();
        navigation.focus();
    }
}

/** Setup app and initialise assets */
async function init() {
    // Add pixi canvas element (app.view) to the document's body
    document.body.appendChild(app.view);

    // Whenever the window resizes, call the 'resize' function
    window.addEventListener('resize', resize);

    // Trigger the first resize
    resize();

    // Add a visibility listener, so the app can pause sounds and screens
    document.addEventListener('visibilitychange', visibilityChange);

    // Setup assets bundles (see assets.ts) and start up loading everything in background
    await initAssets();

    // Add a persisting background shared by all screens
    // navigation.setBackground(TiledBackground);

    // Show initial loading screen
    // await navigation.showScreen(LoadScreen);

    await navigation.showScreen(CityMap);

    // Go to one of the screens if a shortcut is present in url params, otherwise go to home screen
    // if (getUrlParam('game') !== null) {
    //     await navigation.showScreen(GameScreen);
    // } else if (getUrlParam('load') !== null) {
    //     await navigation.showScreen(LoadScreen);
    // } else if (getUrlParam('result') !== null) {
    //     await navigation.showScreen(ResultScreen);
    // } else {
    //     await navigation.showScreen(HomeScreen);
    // }
}


const toggleForms = () => {
    // Handle forms toggling
    const signInContainer = document.querySelector('#auth-sign-in-form') as HTMLElement;
    const signUpContainer = document.querySelector('#auth-sign-up-form') as HTMLElement;
    const passwordRecoveryContainer = document.querySelector('#auth-password-recovery-form') as HTMLElement;

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

const signUp = () => {
    const form = document.querySelector('#auth-sign-up-form') as HTMLElement;
    // Errors
    const emailError = document.querySelector('#sign-up-error-email') as HTMLElement;
    const nickError = document.querySelector('#sign-up-error-nick') as HTMLElement;
    const passwordError = document.querySelector('#sign-up-error-password') as HTMLElement;
    const passwordRepeatError = document.querySelector('#sign-up-error-password-repeat') as HTMLElement;
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
        console.log('create new account');
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
const signIn = () => {
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

const auth = () => {
    toggleForms();
    signUp();
    signIn();
};

auth();
// Init everything
init();
