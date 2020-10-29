import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOz2K3K227ycuk_ow2d1ADHfIvbKFbt10",
  authDomain: "crudempleado-28a97.firebaseapp.com",
  databaseURL: "https://crudempleado-28a97.firebaseio.com",
  projectId: "crudempleado-28a97",
  storageBucket: "crudempleado-28a97.appspot.com",
  messagingSenderId: "625330616549",
  appId: "1:625330616549:web:9e7724b3361d4c1f3ffc0c",
  measurementId: "G-6CJ1DKW2HM"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
