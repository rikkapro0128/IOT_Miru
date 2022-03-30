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
const user = {
  email: 'stkssc002@gmail.com',
  password: 'npmstart007',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// fetch data when data change
// const starCountRef = ref(db, "/");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
// });

// authentication user with email and password
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

// swicth hanlde UI

function switchClick(e) {
  const ctx = e.target;
  const getField = ctx.getAttribute('field-data');
  if (ctx.classList.contains("active")) {
    sendDataByField(getField, true);
    ctx.classList.remove("active");
    if(ctx.previousElementSibling) {
      ctx.previousElementSibling.innerHTML = 'mở';
    }
  } else {
    if(ctx.previousElementSibling) {

    }
    sendDataByField(getField, false);
    ctx.classList.add("active");
    if(ctx.previousElementSibling) {
      ctx.previousElementSibling.innerHTML = 'tắt';
    }
  }
}

const switchs = document.querySelectorAll(".switch");

// init status leds
readDataBypath('devices/leds')
  .then((initStateLed) => {
    for(const [key, value] of Object.entries(initStateLed)) {
      const ctx = document.querySelector(`[field-data=${key}]`);
      if(ctx.previousElementSibling) {
        ctx.previousElementSibling.innerHTML = value ? 'mở' : 'tắt';
      }
      value || ctx.classList.add('active');
    }
  })

for (let i = 0; i < switchs.length; i++) {
  switchs[i].addEventListener("click", switchClick);
}

// toggle menu
const btnToggleMenu = document.querySelector('.welcome');
const menu = document.querySelector('.menu');

btnToggleMenu.addEventListener('click', function() {
  const ctx = menu;
  if (!ctx.classList.contains("active")) {
    anime({
      targets: menu,
      width: '100%',
      translateX: 0,
      easing: 'easeInOutExpo',
      duration: 500,
    });
    ctx.classList.add("active");
  } else {
    anime({
      targets: menu,
      translateX: '-100%',
      easing: 'easeOutExpo',
      duration: 500,
      complete: function() {
        anime({
          targets: menu,
          width: '0px',
          easing: 'easeOutExpo',
          duration: 200,
        });
      }
    });
    ctx.classList.remove("active");
  }
})

function sendDataByField(field, data) {
  set(ref(db, 'devices/leds/' + field + "/"), data);
}

function readDataBypath(path) {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, path + `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }).catch((error) => {
    console.error(error);
  });
}
