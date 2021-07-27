import React, {useState, useEffect} from 'react'
import Item from './Item/Item.js'
import { useDispatch, useSelector  } from 'react-redux'
import { getItems } from '../../actions/items.js';
// import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import './Items.scss'

const Items = () => {

  const items = useSelector(state => state.items);
  console.log(items);

  const dispatch = useDispatch();
  const [currentId, setCurrentId] =  useState(null);

  useEffect(() => {
    dispatch(getItems())
  }, [currentId,dispatch]);

  
  return (
    <div className="main_container">
      <div className="items_container">
        {
          items.isLoading && (
            <>
              <ClipLoader />
            </>
          )
        }
        {
          items.items && (
            <>
              {
                items.items.map((item) => {
                  return <Item setCurrentId={setCurrentId} key={item._id} item={item}/>
               })
              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default Items
