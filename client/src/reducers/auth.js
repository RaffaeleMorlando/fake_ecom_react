// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {auth: null}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      localStorage.setItem('user',JSON.stringify({...action?.data}))
      return action?.data;
    case 'LOGIN_USER':
      localStorage.setItem('user',JSON.stringify({...action?.data}))
      return {...state, auth: action?.data};
    default:
      return state;
  }
}