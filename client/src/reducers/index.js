import { combineReducers } from "redux";
import items from './items.js';
import auth from './auth.js'

export default combineReducers({
  items, 
  auth
})
