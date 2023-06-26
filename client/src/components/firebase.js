// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rpvE0Ass7GqS13z8j6G48KR6kNLjw2s",
  authDomain: "mern-9567d.firebaseapp.com",
  projectId: "mern-9567d",
  storageBucket: "mern-9567d.appspot.com",
  messagingSenderId: "1039565841923",
  appId: "1:1039565841923:web:7afa90eb8cbeff54fc9036",
  measurementId: "G-4N8HLVJ96P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export { storage };
