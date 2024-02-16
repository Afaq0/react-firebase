// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAobKOJEyetU64gApx3pTe8iga_-u3KeLI",
  authDomain: "enterprise-4587a.firebaseapp.com",
  projectId: "enterprise-4587a",
  storageBucket: "enterprise-4587a.appspot.com",
  messagingSenderId: "420489392672",
  appId: "1:420489392672:web:831391a158654ed059c245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
