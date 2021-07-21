import axios from 'axios';

const url = 'http://localhost:7000/items';

const API =  axios.create({
  baseURL: url
});

API.interceptors.request.use((req) => {
  if(localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token }`;
  }

  return req;
});


export const getItems = () => API.get(url);
export const getItemById = (id) => axios.get(`${url}/${id}`);
export const createItem = (newItem) => axios.post(url,newItem);
export const updateItem = (id,updatedItem) => axios.patch(`${url}/${id}`,updatedItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);

const url2 = 'http://localhost:7000/auth';

export const createAccount = (newUser) => axios.post(`${url2}/signup`,newUser);
export const loginAccount = (user) => axios.post(`${url2}/signin`,user);

