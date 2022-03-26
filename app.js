// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-auth.min.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-database.min.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// swicth hanlde UI
const switchs = document.querySelectorAll(".switch");

for (let i = 0; i < switchs.length; i++) {
  switchs[i].addEventListener("click", switchClick);
}

function switchClick(e) {
  const ctx = e.target;
  if (ctx.classList.contains("active")) {
    ctx.classList.remove("active");
  } else {
    ctx.classList.add("active");
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const starCountRef = ref(db, "/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

const auth = getAuth();
signInWithEmailAndPassword(auth, 'stkssc002@gmail.com', 'npmstart007')
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

document
  .querySelector(".user--select__avatar")
  .addEventListener("click", function () {
    set(ref(db, "led/"), true);
  });
