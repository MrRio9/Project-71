import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCuS1aammXJTJd-xDQ2zT4kJbYpXPkNRNw",
    authDomain: "e-library-bf59e.firebaseapp.com",
    projectId: "e-library-bf59e",
    storageBucket: "e-library-bf59e.appspot.com",
    messagingSenderId: "311537960879",
    appId: "1:311537960879:web:ccb8a885bfe718fb7f515a"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
