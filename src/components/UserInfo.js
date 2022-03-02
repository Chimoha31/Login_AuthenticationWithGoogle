import React from 'react'
import {auth} from './firebase';

function UserInfo() {
  return (
    <div className="userInfo">
    {/* googleで設定されているiconと名前を表示する事ができるか？auth.currentUser.○○○で取得可能 */}
    <img src={auth.currentUser.photoURL} alt="" />
    <p>{auth.currentUser.displayName}</p>
  </div>
  )
}

export default UserInfo;