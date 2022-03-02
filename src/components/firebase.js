// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4PZkndtv-62-sSXs2pqV0j-GWy3b5vs4",
  authDomain: "fir-login-a0ffb.firebaseapp.com",
  projectId: "fir-login-a0ffb",
  storageBucket: "fir-login-a0ffb.appspot.com",
  messagingSenderId: "436422059348",
  appId: "1:436422059348:web:cbafe19791ecad29c914c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(); //クリックした時にpopupが出て、どのアカウントでサインインするか決められるのがGoogleAuthProvider。インスタンス化する必要がある。popup機能は無い。popupはsignInWithPopup()

// どのファイルでも使えるようにexportしておく
export {auth, provider}