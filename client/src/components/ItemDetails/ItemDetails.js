import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getItemById } from '../../actions/items';
import Item from '../items/item/Item.js';

const ItemDetails = () => {

  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(state => state);
  console.log(item);

  useEffect(() => {
    dispatch(getItemById(id));
  }, [id,dispatch]);

  return (
    <div>
      <Item item={item} />
      <button onClick={() => history.push('/')} >Back</button>
    </div>
  )
  
}

export default ItemDetails
