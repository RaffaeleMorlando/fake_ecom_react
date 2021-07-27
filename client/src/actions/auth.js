import * as api from '../api/index.js';

export const createAccount = (newUser, history) => async(dispatch)  => {
  try {
    
    const { data } = await api.createAccount(newUser);
    console.log(data);
    dispatch({type:'CREATE_USER', data});
    history.push('/');

  } catch (error) {
    console.log(error.message);
  }

};

export const loginAccount = (user, history) => async(dispatch)  => {

  try {

    const { data } = await api.loginAccount(user);

    if(data.message) {
      //
    } else {
      dispatch({type:'LOGIN_USER', data});
      history.push('/');
    }
    

  } catch (error) {

    console.log(error.message);
    
  }

};

export const logoutAccount = (history) => async (dispatch) => {
    try {
      const {data} = await api.logoutAccount();
      dispatch({type: 'LOGOUT_USER', data});
      history.push('/login');
    } catch (error) {
      console.log(error.message);
    }
}
