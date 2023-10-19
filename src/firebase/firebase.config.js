// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEYzjZVi2VGVnuDt6JMIV6oLEi8HTT5qQ",
  authDomain: "assignment-10-sell-shop.firebaseapp.com",
  projectId: "assignment-10-sell-shop",
  storageBucket: "assignment-10-sell-shop.appspot.com",
  messagingSenderId: "692280841546",
  appId: "1:692280841546:web:fe6fc5c64c14defd049db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;