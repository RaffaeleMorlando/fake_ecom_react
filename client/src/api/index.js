import axios from 'axios';

const url = 'http://localhost:7000';

const API =  axios.create({
  baseURL: url,
  withCredentials: true
});

export const getItems = () => API.get('/items');
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (newItem) => API.post('/items',newItem);
export const updateItem = (id,updatedItem) => API.patch(`/items/${id}`,updatedItem);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export const createAccount = (newUser) => API.post(`/auth/signup`,newUser);
export const loginAccount = (user) => API.post(`/auth/signin`,user);
export const logoutAccount = () => API.get('/auth/signout');

