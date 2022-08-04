import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    
  apiKey: "AIzaSyCiabtrApYmku2HzTBrWUsoaf2Kc-DNLbw",
  authDomain: "run-app-c2b64.firebaseapp.com",
  projectId: "run-app-c2b64",
  storageBucket: "run-app-c2b64.appspot.com",
  messagingSenderId: "886273306007",
  appId: "1:886273306007:web:78c56d27e52a85868b68d2"

};

const app = initializeApp(firebaseConfig);
export const database = getFireStore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();