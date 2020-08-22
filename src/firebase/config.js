import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

//collection: cafes field: city, name
const firebaseConfig = {
  apiKey: "AIzaSyAZ6aygTg_bwUBr6OXW1ljtXK0eAKMhSZU",
  authDomain: "dinesh-firebase.firebaseapp.com",
  databaseURL: "https://dinesh-firebase.firebaseio.com",
  projectId: "dinesh-firebase",
  storageBucket: "dinesh-firebase.appspot.com",
  messagingSenderId: "240313187495",
  appId: "1:240313187495:web:4846c8219e935e5cd6af82",
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
