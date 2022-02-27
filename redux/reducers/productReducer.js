import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
} from "../constants";

export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ADD_PRODUCT_FAIL:
      return { loading: false, success: false, error: action.paylad };
    default:
      return state;
  }
};

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, sucess: false, error: action.payload };
    default:
      return state;
  }
};
