// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state, 
        isLogged: true,
        isLoading: false,
        userInfo: {...action.data.newUser,token: action.data.token}
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
      }
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
        userInfo: action?.data
      }
    case 'LOGOUT_USER':
      return {

      }
    case 'LOGIN_FAILED':
      return { 
        ...state,  
        isLogged: false,
        isLoading: false, 
        error: action.error.message 
      }
    case 'RESET_ERROR_FORM':
      return {

      }
    default:
      return state;
  }
}