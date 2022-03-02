import React from 'react'

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
    // firebaseを使ってGoogleにサインインする
  };

  return(
    <button onClick={signInWithGoogle}>
      <p>Sign In with Google</p>
    </button>
  )
}