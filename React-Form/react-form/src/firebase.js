
 import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjj322K_Ou9ioyt0k-mzXQvKZ7iXQd_Qw",
    authDomain: "react-contact-form-8ed1e.firebaseapp.com",
    projectId: "react-contact-form-8ed1e",
    storageBucket: "react-contact-form-8ed1e.appspot.com",
    messagingSenderId: "386487479194",
    appId: "1:386487479194:web:61dec978c05a3545cba823"
})
  
var db = firebaseApp.firestore()
export {db}