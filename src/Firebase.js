// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ytcHH7VABr8NFICfsxdb2PF0E7AIAiA",
  authDomain: "hotelapp-43ed8.firebaseapp.com",
  projectId: "hotelapp-43ed8",
  storageBucket: "hotelapp-43ed8.appspot.com",
  messagingSenderId: "440877368224",
  appId: "1:440877368224:web:a64cd9f4ea47c752e75ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app)

export {auth, db};