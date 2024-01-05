import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxlm6pPwrkhq3TBu2QMlUmKlBQdaQPDNg",
  authDomain: "lbs-authentication.firebaseapp.com",
  projectId: "lbs-authentication",
  storageBucket: "lbs-authentication.appspot.com",
  messagingSenderId: "74047171546",
  appId: "1:74047171546:web:4cebc7b3d16bd616152ee3",
  measurementId: "G-20GEVLVJ4W",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth(); // Use 'app.auth()' instead of 'firebase.auth()'
export default app;
