import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdWzdI3UqXeVBZPjEqoQyWQ8Lfc85M_FE",
  authDomain: "crudreactfirebase-71267.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-71267.firebaseio.com",
  projectId: "crudreactfirebase-71267",
  storageBucket: "crudreactfirebase-71267.appspot.com",
  messagingSenderId: "756142049392",
  appId: "1:756142049392:web:54cab955a1bba585814cb5",
  measurementId: "G-GR9C4Y939H"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
