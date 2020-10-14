import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDS22Q68nwnJqD2CxyGXIn_CjrAboVjeJY",
  authDomain: "facebook-react-firebase.firebaseapp.com",
  databaseURL: "https://facebook-react-firebase.firebaseio.com",
  projectId: "facebook-react-firebase",
  storageBucket: "facebook-react-firebase.appspot.com",
  messagingSenderId: "883165390044",
  appId: "1:883165390044:web:41b1276bcf495f4b7f8019",
  measurementId: "G-00NM9P5NC1",
});

const db = firebaseConfig.firestore();
const storage = firebaseConfig.storage();

export { firebase, db, storage };
