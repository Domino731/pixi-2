// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-const';
import { getAuth } from 'firebase/auth';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

/** Firebase App instance */
export const firebaseApi = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firestoreApi = getFirestore();