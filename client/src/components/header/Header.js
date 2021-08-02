import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { logoutAccount } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import './Header.scss';
import Nav from '../Nav/Nav';

const Header = () => {

  const {userInfo} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {

    dispatch(logoutAccount(history))

  }

  return (
   <header>
      <h1>Ecom</h1>
      {(userInfo) && (
        <>
          <Nav />
          <div className="user_box">
            <h2>{userInfo.name}</h2>
            <button onClick={() => logoutUser()}>Logout</button>
          </div>
        </>
      )}      
   </header>
  )
}

export default Header
