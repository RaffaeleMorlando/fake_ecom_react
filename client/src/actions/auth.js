import * as api from '../api/index.js';

export const createAccount = (newUser, history) => async(dispatch)  => {
  try {
    dispatch({type: 'USER_CREATE_REQUEST'});
    const { data } = await api.createAccount(newUser);
    dispatch({type:'CREATE_USER', data});
    localStorage.setItem('user',JSON.stringify(data));
    history.push('/');

  } catch (error) {
    console.log(error.response.data)
    dispatch({type: 'USER_CREATE_FAILED', error: error.response.data.message})
  }
};

export const loginAccount = (user, history) => async(dispatch)  => {

  try {

    dispatch({type: 'USER_LOGIN_REQUEST'});
    const { data } = await api.loginAccount(user);
    dispatch({type: 'LOGIN_USER', data});
    localStorage.setItem('user',JSON.stringify(data));
    history.push('/');

  } catch (error) {

    dispatch({type: 'LOGIN_FAILED', error: error.response.data})

  }

};

export const logoutAccount = (history) => async (dispatch) => {

    try {
      
      // await api.logoutAccount();
      localStorage.removeItem('user');
      dispatch({type: 'LOGOUT_USER'});
      history.push('/login');

    } catch (error) {

      console.log(error.response);

    }
}

export const resetErrorForm = () => async (dispatch) => {
  dispatch({type:'RESET_ERROR_FORM'})
}
