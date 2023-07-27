import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeXE8U-DRVfR2VV6auAfrkwZ6RysE7zYY",
  authDomain: "vue-e-store.firebaseapp.com",
  projectId: "vue-e-store",
  storageBucket: "vue-e-store.appspot.com",
  messagingSenderId: "215102641706",
  appId: "1:215102641706:web:35e2f47d741cbfef965553",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs };
