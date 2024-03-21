import { getAuth } from "firebase/auth";
import firebase from "firebase/compat";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2Mwb9HHQADyrvnMVmqa6LJuGSvtVz84Y",
  authDomain: "quizzify-1a36f.firebaseapp.com",
  databaseURL: "https://quizzify-1a36f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizzify-1a36f",
  storageBucket: "quizzify-1a36f.appspot.com",
  messagingSenderId: "196856463681",
  appId: "1:196856463681:web:42fd390fc13ea4e32ca1c0",
  measurementId: "G-DW23X1XBQ6",
};

export const FIREBASE_APP = firebase.initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = firebase.firestore();
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
