// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB54sSwNmWJF04ukzoLGUAzmVj3rSamD0o",
  authDomain: "inventario-c0fed.firebaseapp.com",
  projectId: "inventario-c0fed",
  storageBucket: "inventario-c0fed.appspot.com",
  messagingSenderId: "617898535033",
  appId: "1:617898535033:web:5cbf69472228bda8964ca8",
  measurementId: "G-QRCTJRH2KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);