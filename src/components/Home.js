import React from 'react'
import SignOutButton from '../components/SignOutButton';
import SignInButton from '../components/SignInButton';
import UserInfo from './UserInfo';
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"; //あなたが認証をしている”その状態”を持っているhooksを使うことができる。

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
        <UserInfo />
        <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  )
}

export default Home
