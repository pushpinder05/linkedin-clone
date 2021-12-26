//import firebase from './firebase/app';
//import { initializeApp } from 'firebase/app';  
//const app = initializeApp(firebaseConfig);  
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCenl6GNHuXYv4-gdPSJv-qqs8Y_kCTqkc",
    authDomain: "linkedin-clone-7c81d.firebaseapp.com",
    projectId: "linkedin-clone-7c81d",
    storageBucket: "linkedin-clone-7c81d.appspot.com",
    messagingSenderId: "938596704128",
    appId: "1:938596704128:web:100e09f53cae6a73362b65",
    measurementId: "G-33SB97S367"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };