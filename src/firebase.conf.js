// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const {
  VITE_APP_FB_API_KEY: apiKey,
  VITE_APP_FB_AUTH_DOMAIN: authDomain,
  VITE_APP_FB_PROJECT_ID: projectId,
  VITE_APP_FB_STORAGE_BUCKED :storageBucket,
  VITE_APP_FB_MESSAGING_SENDER_ID : messagingSenderId,
  VIT_APP_FB_APP_ID :appId
} = import.meta.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)