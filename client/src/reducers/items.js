// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, items: [] }, action) => {
  switch (action.type) {
    case 'ERROR':
      return { ...action.error.response }
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case 'FETCH':
      return { ...state, items: action.payload, isLoading: false}
    case 'FETCH_BY_ID':
      return { ...state, ...action.payload }
    case 'CREATE':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE':
      return {...state, items: [state.items.map((item) => item._id === action.payload._id ? action.payload : item)] }
    case 'DELETE':
      return  {...state, items: state.items.filter(item => item._id !== action.payload)}; 
    default:
      return state;
  }
}


