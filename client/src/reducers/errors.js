const errors = (state = { isError: false }, action) => {
  switch (action.type) {
    case 'ERROR_LOGIN':
      return {...state, isError: true, error: action.error}
  
    default:
      return state;
  }
}

export default errors;