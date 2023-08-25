import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEPT7yfu2yDUB9toHjpUMj7o-OfTuyrvE",
  authDomain: "fir-login-4cb86.firebaseapp.com",
  projectId: "fir-login-4cb86",
  storageBucket: "fir-login-4cb86.appspot.com",
  messagingSenderId: "877065776645",
  appId: "1:877065776645:web:f2499dbb7180291d31f66c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};
