import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAR_97cw24UXy86rzMqkL30ojIGtT8wCL8",
    authDomain: "eshopdb-718ee.firebaseapp.com",
    projectId: "eshopdb-718ee",
    storageBucket: "eshopdb-718ee.appspot.com",
    messagingSenderId: "24102759931",
    appId: "1:24102759931:web:f06463bf49711956c52f5e",
    measurementId: "G-L4LZ6CDNFL"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;