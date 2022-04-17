// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLlY0n-dzEXU4GrYhGaorOJPykmm8hjWg",
  authDomain: "online-learning-service-ass-10.firebaseapp.com",
  projectId: "online-learning-service-ass-10",
  storageBucket: "online-learning-service-ass-10.appspot.com",
  messagingSenderId: "282443002265",
  appId: "1:282443002265:web:e174fd2f88795a132d6308",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;