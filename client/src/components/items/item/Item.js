import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../actions/items.js';
import { useHistory } from 'react-router-dom';
import { BsTrash , BsInfoCircle , BsPencil} from "react-icons/bs";

//Style
import './Item.scss';


const Item = ({ item, setCurrentId}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const itemDetails = () => {history.push(`item/${item._id}`)}
  const itemEdit = () => {history.push(`item/edit/${item._id}`)}

  return (
    <div className="item">
      <img src={item.image} alt="" />
      <h1>{ item.name }</h1>
      <h2>{ item.brand} </h2>
      <p>{ item.price }</p>
      <p className="description">{ item.description }</p>
      <div className="button_container">
        <BsTrash onClick={() => dispatch(deleteItem(item._id))} />
        <BsInfoCircle onClick={() => itemDetails(item._id)} />
        <BsPencil onClick={() => itemEdit(item._id)} />
      </div>
    </div>
  )

}

export default Item;
