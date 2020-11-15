import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCtON2AiGsw6QVyv18JKhb7FA5pYAgjk_U",
  authDomain: "pay1-e95ac.firebaseapp.com",
  databaseURL: "https://pay1-e95ac.firebaseio.com",
  projectId: "pay1-e95ac",
  storageBucket: "pay1-e95ac.appspot.com",
  messagingSenderId: "304575925983",
  appId: "1:304575925983:web:de466767e6d6464d81a36a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
