import { combineReducers } from "redux";
import apiReducer from "./API/apiReducer";
// import productReducer from "./Product/productReducer";

const rootReducer = combineReducers({
  // products: productReducer,
  api: apiReducer,
});

export default rootReducer;
