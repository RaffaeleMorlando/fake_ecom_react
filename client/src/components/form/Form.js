import React, { useState, useEffect } from 'react'
import { createItem , updateItem } from '../../actions/items.js';
import { useDispatch , useSelector } from 'react-redux';
import './Form.scss'
import { useParams } from 'react-router-dom';

const Form = () => {

  const [itemData, setItemData] = useState({
    name: '',
    brand: '',
    price: 0,
    description: ''
  })

  const currentId = useParams();
  console.log(currentId);

  const items = useSelector(state => currentId ? state.items.items.find((item) => item._id === currentId.id) : null);

  useEffect(() => {

    if(items) setItemData(items);

  }, [items]);


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(currentId).length !== 0 ? dispatch(updateItem(currentId, itemData)) : dispatch(createItem(itemData))
    
    clear()
  }

  const clear = () => {
    setItemData({
      name: '',
      brand: '',
      price: 0,
      description: ''
    })

  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit} >
        <h2>{currentId ? 'Update' : 'Create'} item</h2>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={itemData.name || ''}  
            onChange={(e) => setItemData({...itemData, name: e.target.value})} />
        </div>

        <div className="form-item">
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" value={itemData.brand || ''} onChange={(e) => setItemData({...itemData, brand: e.target.value})} />
        </div>

        <div className="form-item">
          <label htmlFor="price">Price</label>
          <input type="number" min="0" name="price" value={itemData.price || ''} onChange={(e) => setItemData({...itemData, price: e.target.value})} />
        </div>

        <div className="form-item">
          <label htmlFor="description">Description</label>
          <textarea name="description" cols="30" rows="10" value={itemData.description || ''} onChange={(e) => setItemData({...itemData, description: e.target.value})}/>
        </div>

        <input type="submit" value="Aggiungi" />
      </form>
    </div>
  )
}

export default Form
