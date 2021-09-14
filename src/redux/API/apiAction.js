import axios from "axios";
import { setProduct } from "../Product/productActions";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./apiType";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchFailure = (err) => {
  return {
    type: FETCH_FAILURE,
    payload: err,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        dispatch(setProduct(res.data));
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => dispatch(fetchFailure("something went wrong")));
  };
};
