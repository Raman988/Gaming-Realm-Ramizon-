import firebase from 'firebase/app';
// import 'firebase/storage';

const firebaseConfig = {
  // your Firebase project configuration details
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
