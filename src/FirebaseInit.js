// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtrpxllj5Ncm1NIwpdktRPAU4YSc22qnw",
  authDomain: "listing-storage.firebaseapp.com",
  projectId: "listing-storage",
  storageBucket: "listing-storage.appspot.com",
  messagingSenderId: "283781611266",
  appId: "1:283781611266:web:ca28c60c9ade19c56acc1b",
  measurementId: "G-TMQWD51EQ6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;