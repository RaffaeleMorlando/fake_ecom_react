import { combineReducers } from "redux";
import items from './items.js';
import auth from './auth.js'
import errors from './errors.js'

export default combineReducers({
  items, 
  auth,
  errors,
})
