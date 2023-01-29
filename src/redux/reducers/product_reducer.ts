import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  HOME_PRODUCT_FAIL,
  HOME_PRODUCT_REQUEST,
  HOME_PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from '../constants/productconstants';

type StateType = {
  loading: boolean;
  success: boolean;
  error: any;
  dataInfo: any;
  cartItems: any;
};

// const dataFromLocalStorage = localStorage.getItem('data')
//   ? JSON.parse(localStorage.getItem('data') || '')
//   : null;

const initialState: StateType = {
  loading: false,
  success: false,
  error: '',
  //   dataInfo: localStorage.getItem('dataInfo')
  //     ? JSON.parse(localStorage.getItem('userInfo') || '')
  //     : null,
  dataInfo: {},
  cartItems: {
    cart: [],
  },
};

// console.log(initialState?.cartItems);

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true };

    case PRODUCT_SUCCESS:
      return { loading: false, success: true, dataInfo: action.payload };

    case PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const homeProductsReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case HOME_PRODUCT_REQUEST:
      return { loading: true };

    case HOME_PRODUCT_SUCCESS:
      return { loading: false, success: true, dataInfo: action.payload };

    case HOME_PRODUCT_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const createProductReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loading: true };

    case CREATE_PRODUCT_SUCCESS:
      return { loading: false, success: true, dataInfo: action.payload };

    case CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getSingleProductReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_REQUEST:
      return { loading: true };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return { loading: false, success: true, dataInfo: action.payload };

    case GET_SINGLE_PRODUCT_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const addToCartReducer = (state = { cart: [] }, action: any) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      // console.log({ payload: action.payload });
      console.log(action.payload);
      return { cart: action.payload };

    default:
      return state;
  }
};
