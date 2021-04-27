
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3shRpRy85r1lznsNvW-qnBtGN4_IZSfs",
  authDomain: "clone-cp-b33fe.firebaseapp.com",
  projectId: "clone-cp-b33fe",
  storageBucket: "clone-cp-b33fe.appspot.com",
  messagingSenderId: "541607568899",
  appId: "1:541607568899:web:f2905f9123b9d9b6d5d036",
  measurementId: "G-2M2ZRHJD7Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
