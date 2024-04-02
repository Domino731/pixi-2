// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-const';
import { getAuth } from 'firebase/auth';

/** Firebase App instance */
export const firebaseApi = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
