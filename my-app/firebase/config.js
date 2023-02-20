// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwcyPGplSdQFfO4l49Np1y5Gc10DMLEb4",
  authDomain: "react-native-app-92606.firebaseapp.com",
  projectId: "react-native-app-92606",
  storageBucket: "react-native-app-92606.appspot.com",
  messagingSenderId: "399658898254",
  appId: "1:399658898254:web:b4cebb57c7247ad93b841f",
  measurementId: "G-VD4DYE56WT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const dataBase = getFirestore(firebaseApp);