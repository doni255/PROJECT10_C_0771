import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  //tambahkan firebaseConfig project
  apiKey: "AIzaSyBVMdL-QJi3-xwmZuNB4kqY1vLxC0DPfko",
  authDomain: "vuefire0771.firebaseapp.com",
  projectId: "vuefire0771",
  storageBucket: "vuefire0771.appspot.com",
  messagingSenderId: "663763870109",
  appId: "1:663763870109:web:c0f34d1a02cfed8a4c8f74"
}

//tambahkan code untuk menginisialisasikan Firebase
const firebaseApp = initializeApp(firebaseConfig);

//tambahkan code untuk menginisialisasikan Realtime Database 
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp);
