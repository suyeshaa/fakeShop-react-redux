import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
