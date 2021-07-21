import React, {useState, useEffect} from 'react'
import Form from '../form/Form.js';
import Item from '../items/item/Item.js'
import { useDispatch, useSelector  } from 'react-redux'
import { getItems } from '../../actions/items.js';

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
      <div className="items_container">
        {
         !items.length ? null : items.map((item) => {
            return <Item setCurrentId={setCurrentId} key={item._id} item={item}/>
         })
        }
      </div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  )
}

export default Items
