import { getDatabase} from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABh6tVuqT64Waht-5AbNztHN_EZo8xXfg",
  authDomain: "fir-prueba-d6c09.firebaseapp.com",
  databaseURL: "https://fir-prueba-d6c09-default-rtdb.firebaseio.com",
  projectId: "fir-prueba-d6c09",
  storageBucket: "fir-prueba-d6c09.appspot.com",
  messagingSenderId: "17224663133",
  appId: "1:17224663133:web:993a2248f55ae8df628db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);