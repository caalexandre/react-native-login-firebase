
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyBNvwSsCADS068bGnc9aiOJMziKQvbqi2Y",
  authDomain: "cauaifal523.firebaseapp.com",
  projectId: "cauaifal523",
  storageBucket: "cauaifal523.appspot.com",
  messagingSenderId: "1071488950898",
  appId: "1:1071488950898:web:211f63aa3116fb0f3898eb",
  measurementId: "G-F0BWZL98NL"
};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)

export { app, auth }