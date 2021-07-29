import * as api from '../api/index.js';

export const createAccount = (newUser, history) => async(dispatch)  => {
  try {
    dispatch({type: 'USER_CREATE_REQUEST'});
    const { data } = await api.createAccount(newUser);
    localStorage.setItem('user',JSON.stringify(data));
    dispatch({type:'CREATE_USER', data});
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

      const {data} = await api.logoutAccount();
      localStorage.removeItem('user'); // or localStorage.clear();
      dispatch({type: 'LOGOUT_USER', data});
      history.push('/login');

    } catch (error) {

      console.log(error.message);

    }
}
