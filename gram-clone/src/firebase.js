import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhtSk_KLJnsgb9OIWSoF6vkwKJt8Gl8ww",
  authDomain: "thegramclone.firebaseapp.com",
  projectId: "thegramclone",
  storageBucket: "thegramclone.appspot.com",
  messagingSenderId: "980689904140",
  appId: "1:980689904140:web:a1f7ffbdab9211d3978429",
  measurementId: "G-EEP050X3F1",
});

const db = firebaseApp.firestore();
// database

const auth = firebase.auth();
// authentification - signing-register

const storage = firebase.storage();
// storage in database

export { db, auth, storage };
