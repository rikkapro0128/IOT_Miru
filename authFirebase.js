// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-auth.min.js";
import {
  getDatabase,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-database.min.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQUwQKKLhy90YlOtSoUKM2wtTpB5pG6FQ",
  authDomain: "steam-strategy-345319.firebaseapp.com",
  databaseURL:
    "https://steam-strategy-345319-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "steam-strategy-345319",
  storageBucket: "steam-strategy-345319.appspot.com",
  messagingSenderId: "657447147258",
  appId: "1:657447147258:web:fd7f7979fc97d1851e9b43",
};
// config account firebase
const user = {
  email: 'stkssc002@gmail.com',
  password: 'npmstart007',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Authentication user with email and password
const auth = getAuth();
signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed in
    // const user = userCredential.user;
    console.log('you was signed!');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

export default db;