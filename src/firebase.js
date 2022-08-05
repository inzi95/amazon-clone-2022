import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMbtLKQ7i3NM4zCB6bIdXhHqhG65PCj3Y",
  authDomain: "challenge-inzi-80142.firebaseapp.com",
  projectId: "challenge-inzi-80142",
  storageBucket: "challenge-inzi-80142.appspot.com",
  messagingSenderId: "463029667161",
  appId: "1:463029667161:web:8d5ed199aa6a232804f848",
  measurementId: "G-HN5WD92ZHV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };