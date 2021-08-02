// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { products: [] }, action) => {
  switch (action.type) {
    case 'START_FETCH':
      return {
        ...state, 
        isLoading: true
      }
    case 'FETCH_ERROR':
      return { 
        ...state, 
        isLoading: false 
      }
    case 'FETCH':
      return {
        ...state, 
        products: action.payload, 
        isLoading: false
      }
    case 'FETCH_BY_ID':
      return {
        ...state,
        ...action.payload 
      }
    case 'CREATE':
      return {
        ...state, 
        products: [...state.products, 
        action.payload] 
      }
    case 'UPDATE':
      return {
        ...state, 
        products: [state.products.map((item) => item._id === action.payload._id ? action.payload : item)] 
      }
    case 'DELETE':
      return  {
        ...state, 
        products: state.products.filter(item => item._id !== action.payload)
      }
    default:
      return state;
  }
}


