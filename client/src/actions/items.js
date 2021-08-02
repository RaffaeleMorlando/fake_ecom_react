import * as api from '../api/index.js';

export const getItems = () => async (dispatch) =>  {
  try {
    dispatch({type: 'START_FETCH'})
    const {data} = await api.getItems();
    dispatch({ type: 'FETCH', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
}

export const getItemById = (id) => async (dispatch) => {
  try {
    const {data} = await api.getItemById(id);
    dispatch({type: 'FETCH_BY_ID', payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

export const createItem = (newItem) => async (dispatch) =>  {
  
  const {id} = JSON.parse(localStorage.getItem('user'));
  console.log(id);

  try {
    const { data } = await api.createItem({...newItem, id: id });
    dispatch({type: 'CREATE', payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

export const updateItem = (id,updatedItem) => async (dispatch) =>  {

  try {

    const { data } = await api.updateItem(id, updatedItem);
    dispatch({type: 'UPDATE', payload: data});

  } catch (error) {
    
    console.log(error.message);
  }

}

export const deleteItem = (id) => async (dispatch) => {

  try {
    
    await api.deleteItem(id);
    dispatch({ type: 'DELETE', payload: id });

  } catch (error) {
    
      console.log(error.message);
  }

}
