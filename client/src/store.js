import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";

import auth from './reducers/auth';
import items from './reducers/items';

const reducer = combineReducers({
  auth,
  items
})

const userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
  auth: {
    userInfo: userInfoFromStorage
  }
}

const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;