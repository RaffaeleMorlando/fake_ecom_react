import * as api from '../api/index.js';

export const createAccount = (newUser, history) => async(dispatch)  => {
  try {
    
    const { data } = await api.createAccount(newUser);
    console.log(data);
    dispatch({type:'CREATE_USER', data});
    //history.push('/items');

  } catch (error) {
    console.log(error.message);
  }

};

export const loginAccount = (user, history) => async(dispatch)  => {
  try {

    const { data } = await api.loginAccount(user);
    dispatch({type:'LOGIN_USER', data});
    history.push('/items');

  } catch (error) {
    console.log(error.message);
  }

};