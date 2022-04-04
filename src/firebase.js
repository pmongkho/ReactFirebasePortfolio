// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABI3xss9OSoN39UTObY84FtXI6hs6udSI",
  authDomain: "portfolio-ef4ca.firebaseapp.com",
  databaseURL: "https://portfolio-ef4ca-default-rtdb.firebaseio.com",
  projectId: "portfolio-ef4ca",
  storageBucket: "portfolio-ef4ca.appspot.com",
  messagingSenderId: "818349437829",
  appId: "1:818349437829:web:0e80278ef4084245564aec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

