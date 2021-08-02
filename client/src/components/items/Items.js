import React, {useState, useEffect} from 'react'
import Item from './Item/Item.js'
import { useDispatch, useSelector  } from 'react-redux'
import { getItems } from '../../actions/items.js';
// import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import './Items.scss'

const Items = () => {

  const items = useSelector(state => state.items);

  const dispatch = useDispatch();
  const [currentId, setCurrentId] =  useState(null);

  useEffect(() => {
    dispatch(getItems())
  }, [currentId,dispatch]);

  
  return (
    <div className="main_container">
      {
        items.isLoading && (
          <>
            <ClipLoader />
          </>
        )
      }
      {
        items.products && (
          <>
            {
              items.products.map((item) => {
                return <Item setCurrentId={setCurrentId} key={item._id} item={item}/>
              })
            }
          </>
        )
      }
    </div>
  )
}

export default Items
