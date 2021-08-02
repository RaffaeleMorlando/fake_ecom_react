import React , { useEffect } from 'react';
import Header from '../../components/Header/Header.js';
import Items from '../../components/Items/Items.js';
import SideMenu from '../../components/SideMenu/SideMenu.js';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import ClipLoader from 'react-spinners/ClipLoader';

import './Home.scss';

const Home = () => {

  const {userInfo} = useSelector(state => state.auth);

  const history = useHistory();

  useEffect(() => {

    if(!userInfo) {

      let timeout = setTimeout(() => {
        history.push('/login')
      }, 2000);
  
      return () => {
        clearTimeout(timeout);
      }

    }

  }, [history,userInfo]);

  return (
    <>
      <Header />
      {
        userInfo && ( 
          <main>
            <SideMenu />
            <Items />
          </main>
      )
      }
      {
        !userInfo && (<ClipLoader />)
      }
    </>
  )
}

export default Home;
