import * as api from '../api/index.js';

//Action creator
// funzione che crea un action dall'api

//Utilizzo di redux thunk, in quanto si effettua un azione asincrona e questo permette di utilizzare async await
export const getItems = () => async (dispatch) =>  {
  try {
    
    const { data } = await api.getItems();
    console.log('data',data);
    dispatch({ type: 'FETCH', payload: data });

  } catch (error) {
    console.log(error.message);
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
  
  try {
    const { data } = await api.createItem(newItem);
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
