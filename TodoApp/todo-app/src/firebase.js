
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyCZzQXg5OzBABNNJaG29sLeEtNDKaFraE4",
  authDomain: "todo-app-cp-8e3d4.firebaseapp.com",
  projectId: "todo-app-cp-8e3d4",
  storageBucket: "todo-app-cp-8e3d4.appspot.com",
  messagingSenderId: "162303426037",
  appId: "1:162303426037:web:644e536a01cf05f4a134bc",
  measurementId: "G-LVGC4R0LXK"
})

const db = firebaseApp.firestore();
export default db;

