import { combineReducers } from "redux"
import productReducer from './productReducer';

const mainReducer = combineReducers({
  productReducer,
})

export default mainReducer