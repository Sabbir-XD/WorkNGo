// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYdHCCIro_e1mII_PmzVWr60IbO8WJwGo",
  authDomain: "assaignment-10-client-162f6.firebaseapp.com",
  projectId: "assaignment-10-client-162f6",
  storageBucket: "assaignment-10-client-162f6.firebasestorage.app",
  messagingSenderId: "584679166698",
  appId: "1:584679166698:web:8c2b0b056451fcce9bfd93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);