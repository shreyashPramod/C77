import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCDJ7j3poMXyL4hUF3LFXv1bDQS9Czdr9s",
    authDomain: "book-santa-d348e.firebaseapp.com",
    projectId: "book-santa-d348e",
    storageBucket: "book-santa-d348e.appspot.com",
    messagingSenderId: "934289722344",
    appId: "1:934289722344:web:c581a4b5f015b3c138325d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();