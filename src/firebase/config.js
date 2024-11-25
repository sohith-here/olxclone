import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAXuEWKpkiUbNST7hhuxNGvOpYcLxjwRw8",
    authDomain: "olx-clone-9d450.firebaseapp.com",
    projectId: "olx-clone-9d450",
    storageBucket: "olx-clone-9d450.appspot.com",
    messagingSenderId: "196869515367",
    appId: "1:196869515367:web:d3514f5d45e8de32df8cc2",
    measurementId: "G-PGJ1TJ8HY6"
  };
  export default firebase.initializeApp(firebaseConfig);
