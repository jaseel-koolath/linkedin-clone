import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA6u2WpxxDVd5faxuSzahIvnklNDkshqY",
  authDomain: "linkedin-clone-d7f2e.firebaseapp.com",
  projectId: "linkedin-clone-d7f2e",
  storageBucket: "linkedin-clone-d7f2e.appspot.com",
  messagingSenderId: "514772382320",
  appId: "1:514772382320:web:b3256a96f720299d90bab5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
