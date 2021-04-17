import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb744vGOgs9u5bCsK3uv3HzLMve_OXG4Y",
  authDomain: "facebook-clone-c4ce6.firebaseapp.com",
  projectId: "facebook-clone-c4ce6",
  storageBucket: "facebook-clone-c4ce6.appspot.com",
  messagingSenderId: "331350554882",
  appId: "1:331350554882:web:07223fb897b1f42669aa1b",
  measurementId: "G-G9KC56QHQ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
