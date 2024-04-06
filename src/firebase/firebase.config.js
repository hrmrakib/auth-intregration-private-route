// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTe70RGdjscaIAryUOm-NLh6iDjJPZEg",
  authDomain: "auth-intregration-private-rout.firebaseapp.com",
  projectId: "auth-intregration-private-rout",
  storageBucket: "auth-intregration-private-rout.appspot.com",
  messagingSenderId: "21010223337",
  appId: "1:21010223337:web:0dfe89e6aa69428930a078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
