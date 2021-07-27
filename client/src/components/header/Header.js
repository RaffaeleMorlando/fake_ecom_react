import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { logoutAccount } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import './Header.scss';
import Nav from '../Nav/Nav';

const Header = () => {

  const [user, setUser] = useState()
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem('user')));
  }, []);

  const logoutUser = () => {
    dispatch(logoutAccount(history))
  }


  return (
   <header>
      <h1>Ecom</h1>
      {(user && !user.message) && (
        <>
          <Nav />
          <div className="user_box">
            <h2>{user.name}</h2>
            <button onClick={() => logoutUser()}>Logout</button>
          </div>
        </>
      )}      
   </header>
  )
}

export default Header
