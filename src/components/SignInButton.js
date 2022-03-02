import React from 'react'
import {auth, provider} from './firebase';
import { signInWithPopup } from 'firebase/auth';

function SignInButton() {
  const signInWithGoogle = () => {
    // firebaseを使ってGoogleにサインインする。
    // signInWithPopupには2つ引数が必要
    signInWithPopup(auth, provider);
  };
  return (
    <button onClick={signInWithGoogle}>
      <p>Sign In with Google</p>
    </button>
  )
}

export default SignInButton



 



