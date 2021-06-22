import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfPU4QzgdM3gSqY_5CpCJmVvACa-VURGo",
  authDomain: "movie-85270.firebaseapp.com",
  projectId: "movie-85270",
  storageBucket: "movie-85270.appspot.com",
  messagingSenderId: "965035516379",
  appId: "1:965035516379:web:2dfbc69f1472c91fda87fe",
  measurementId: "G-XZS22NTPB1",
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;
