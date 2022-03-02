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
    signInWithPopup(auth, provider);
  };

  return(
    <button onClick={signInWithGoogle}>
      <p>Sign In with Google</p>
    </button>
  )
}