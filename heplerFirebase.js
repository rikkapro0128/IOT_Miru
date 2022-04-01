import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.10/firebase-database.min.js";
import db from './authFirebase.js'

function sendDataByField(path, data) {
  set(ref(db, path), data);
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

export { 
  readDataBypath,
  sendDataByField,
};
