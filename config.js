import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAp2ByN8hNKbpTF51w22LBwLkfFhcVFPrs",
    authDomain: "buzzer-app-d1021.firebaseapp.com",
    databaseURL: "https://buzzer-app-d1021.firebaseio.com",
    projectId: "buzzer-app-d1021",
    storageBucket: "buzzer-app-d1021.appspot.com",
    messagingSenderId: "853163049441",
    appId: "1:853163049441:web:909ed6aac8a9c709b252a0",
    measurementId: "G-VYSMHY50DD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
