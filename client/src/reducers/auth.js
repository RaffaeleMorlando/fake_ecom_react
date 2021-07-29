// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state, 
        isLogged: true,
        isLoading: false,
        auth: action?.data
      }
    case 'USER_CREATE_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'USER_CREATE_FAILED':
      return { 
        ...state,  
        isLogged: false,
        isLoading: false, 
        error: action.error 
      };
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'LOGIN_USER':
      return {
        ...state, 
        isLoading: false,
        isLogged: true,
        auth: action?.data
      };
    case 'LOGOUT_USER':
      return {...state, auth: action?.data};
    case 'LOGIN_FAILED':
      return { 
        ...state,  
        isLogged: false,
        isLoading: false, 
        error: action.error.message 
      };
    default:
      return state;
  }
}