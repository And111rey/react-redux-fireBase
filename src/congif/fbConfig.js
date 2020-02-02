import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyBOc9SUdMKSTe0ObMIEcxWkKaW07RAGxlU",
    authDomain: "react-redux-firebase-e18c5.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-e18c5.firebaseio.com",
    projectId: "react-redux-firebase-e18c5",
    storageBucket: "react-redux-firebase-e18c5.appspot.com",
    messagingSenderId: "344649099008",
    appId: "1:344649099008:web:3d269bc82df750d061b5e5",
    measurementId: "G-K01JMVSNVC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase

