import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDRn1EtvJo9LUoV7rUoq9TBWkvvsOCY08U",
  authDomain: "whatsapp-6ae4f.firebaseapp.com",
  projectId: "whatsapp-6ae4f",
  storageBucket: "whatsapp-6ae4f.appspot.com",
  messagingSenderId: "744145851049",
  appId: "1:744145851049:web:f228211044684a945f0fb8",
  measurementId: "G-SG77NQXCSK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
