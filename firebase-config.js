import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-mqI2gljPLMS1KW_InAyE3XzS5tQch2I",
  authDomain: "fir-auth-fb151.firebaseapp.com",
  databaseURL: "https://fir-auth-fb151-default-rtdb.firebaseio.com",
  projectId: "fir-auth-fb151",
  storageBucket: "fir-auth-fb151.appspot.com",
  messagingSenderId: "748135517993",
  appId: "1:748135517993:web:20baa8d89cee3158c2b138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };