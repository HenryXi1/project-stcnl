// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtpTlp5QYF2PBWO5rVrBS99K2wNOWrmZw",
  authDomain: "image-upload-420cf.firebaseapp.com",
  projectId: "image-upload-420cf",
  storageBucket: "image-upload-420cf.appspot.com",
  messagingSenderId: "91801327475",
  appId: "1:91801327475:web:56860f7b7771805bf8d706",
  measurementId: "G-ND307Y4S54"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;