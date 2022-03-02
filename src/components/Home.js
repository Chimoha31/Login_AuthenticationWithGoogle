import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from "./firebase";

function Home() {
  return (
    <div>
     <SignInButton />
    </div>
  )
}

export default Home

// googleボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    // firebaseを使ってGoogleにサインインする。
    // signInWithPopupには2つ引数が必要
    signInWithPopup(auth, provider);
  };

  return(
    <button onClick={signInWithGoogle}>
      <p>Sign In with Google</p>
    </button>
  )
}