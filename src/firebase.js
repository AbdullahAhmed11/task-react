// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgYAzuYzkvpEmykPRIBjQ9loO91C-0c5E",
    authDomain: "appauth-edebb.firebaseapp.com",
    projectId: "appauth-edebb",
    storageBucket: "appauth-edebb.appspot.com",
    messagingSenderId: "760959974463",
    appId: "1:760959974463:web:ce64d6b805dc9f34cd4c8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;