import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./apiType";

const initialState = {
  isLoading: false,
  users: [],
  err: "",
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        err: "",
      };
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        users: action.payload,
        err: "",
      };
    case FETCH_FAILURE:
      return {
        isLoading: false,
        users: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
