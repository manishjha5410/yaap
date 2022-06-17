import firebase from "firebase/app";
import "firebase/messaging";
 
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCNJZ5OHUXxVIJMMU72Ekwj_ZIK0bBpxok",
    authDomain: "first-87bb1.firebaseapp.com",
    databaseURL: "https://first-87bb1.firebaseio.com",
    projectId: "first-87bb1",
    storageBucket: "first-87bb1.appspot.com",
    messagingSenderId: "640175568128",
    appId: "1:640175568128:web:ed1dba042a650107452fe5"
};

// Initialize Firebase
const initializedFirebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
 
const messaging = initializedFirebaseApp.messaging();
export { messaging };