import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmJS4ThENxZBzJna1wQ_lBnUxyluC2oO4",
  authDomain: "crwn-clothing-f5ef9.firebaseapp.com",
  projectId: "crwn-clothing-f5ef9",
  storageBucket: "crwn-clothing-f5ef9.appspot.com",
  messagingSenderId: "98685785389",
  appId: "1:98685785389:web:ac8ca7d066bd1795aa6fa4",
  measurementId: "G-CX5J20CBB2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
