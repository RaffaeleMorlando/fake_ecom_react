import React , { useEffect } from 'react';
import Header from '../../components/Header/Header.js';
import Items from '../../components/Items/Items.js';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {

  const items = useSelector(state => state.items);

  const history = useHistory();

  useEffect(() => {

    if(items.status) {

      let timeout = setTimeout(() => {
        history.push('/login')
      }, 5000);
  
      return () => {
        clearTimeout(timeout);
      }

    }

  }, [history,items.status]);

  return (
    <>
      <Header />
      <Items />
      {
        items.status === 401 && (
          <>
            <h1>{items.data.message}</h1>
            <ClipLoader />
          </>
        )
      }
    </>
  )
}

export default Home;
