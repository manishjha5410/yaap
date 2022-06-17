
importScripts("https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js");

const FIREBASE_CONFIG = {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration

    apiKey: "AIzaSyCNJZ5OHUXxVIJMMU72Ekwj_ZIK0bBpxok",
    authDomain: "first-87bb1.firebaseapp.com",
    databaseURL: "https://first-87bb1.firebaseio.com",
    projectId: "first-87bb1",
    storageBucket: "first-87bb1.appspot.com",
    messagingSenderId: "640175568128",
    appId: "1:640175568128:web:ed1dba042a650107452fe5"
    // Initialize Firebase
    // Your Config
};

// Initialize firebase in the service worker.
firebase.initializeApp(FIREBASE_CONFIG);

// Start Receiving Push Notifications when
// the browser tab is in the background or closed.
firebase.messaging();