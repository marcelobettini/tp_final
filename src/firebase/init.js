import firebase from 'firebase'
// import firestore from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAH06VLIvJSi-PhhaICkjcgRiS4GFPmSrM",
  authDomain: "users-c4427.firebaseapp.com",
  databaseURL: "https://users-c4427-default-rtdb.firebaseio.com",
  projectId: "users-c4427",
  storageBucket: "users-c4427.appspot.com",
  messagingSenderId: "649772692587",
  appId: "1:649772692587:web:4b92189c4645c495bd6d2e",
  measurementId: "G-0KCV44RBHL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
