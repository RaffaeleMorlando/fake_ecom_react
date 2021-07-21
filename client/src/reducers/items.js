// eslint-disable-next-line import/no-anonymous-default-export
export default (items = [], action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload;
    case 'FETCH_BY_ID':
      return action.payload;
    case 'CREATE':
      return [...items,action.payload];
    case 'UPDATE':
      return items.map((item) => item._id === action.payload._id ? action.payload : item);
    case 'DELETE':
      return items.filter((item) => item._id !== action.payload);
    default:
      return items;
  }
}


