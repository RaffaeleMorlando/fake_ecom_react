import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../actions/items.js';
import { useHistory } from 'react-router-dom';

//Style
import './Item.scss';


const Item = ({ item, setCurrentId}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const itemDetails = () => {history.push(`items/${item._id}`)}

  return (
    <div className="item">
      <img src={item.image} alt="" />
      <h1>{ item.name }</h1>
      <h2>{ item.brand} </h2>
      <p>{ item.price }</p>
      <p className="description">{ item.description }</p>
      <div className="button_container">
        <input type="button" value="edit" onClick={() => setCurrentId(item._id)} />
        <input type="button" value="delete" onClick={() => dispatch(deleteItem(item._id))} />
        <input type="button" value="info" onClick={() => itemDetails(item._id)} />
      </div>
    </div>
  )

}

export default Item;
