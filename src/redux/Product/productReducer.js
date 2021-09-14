import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCT,
} from "./productType";

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return [action.payload];
    case SELECTED_PRODUCT:
      return [...state, action.payload];
    case REMOVE_SELECTED_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
