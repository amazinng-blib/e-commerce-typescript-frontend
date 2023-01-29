import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { handleError } from '../../utils';
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
import { StoreReducerTypes } from '../store';

export const productActions = () => async (dispatch: any, getState: any) => {
  // const { userInfo } = useSelector((store: any) => store.loginUser);
  // const { loginUser } = getState();

  // const token = loginUser?.userInfo;

  const dataFromLocalStorage = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') || '')
    : null;

  const token = dataFromLocalStorage?.token;

  // console.log(token);

  try {
    dispatch({ type: PRODUCT_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      'http://localhost:5000/api/products',
      // {
      // headers: { authorization: `Bearer ${token}` },

      // }
      config
    );

    localStorage.setItem('products', JSON.stringify(data));

    dispatch({ type: PRODUCT_SUCCESS, payload: data });

    // toast.success(data.message, {
    //   position: 'top-center',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'light',
    // });
  } catch (error) {
    dispatch({ type: PRODUCT_FAIL, payload: handleError(error) });
  }
};

export const homeProductsAction =
  () => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: HOME_PRODUCT_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/products/home`
      );
      localStorage.setItem('HomeProducts', JSON.stringify(data));
      // console.log(data);

      dispatch({ type: HOME_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: HOME_PRODUCT_FAIL, payload: handleError(error) });
    }
  };

export const createProductAction =
  ({
    name,
    price,
    image,
    category,
    rating,
    numReviews,
    description,
    countInStock,
  }: {
    name: any;
    price: any;
    image: any;
    category: any;
    rating: any;
    numReviews: any;
    description: any;
    countInStock: any;
  }) =>
  async (dispatch: any, getState: any) => {
    const dataFromLocalStorage = localStorage.getItem('loginUser')
      ? JSON.parse(localStorage.getItem('loginUser') || '')
      : null;

    const token = dataFromLocalStorage?.token;

    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
      // console.log(name, category, price, rating, numReviews);

      let FD = new FormData();

      FD.append('name', name);
      FD.append('price', price);
      FD.append('image', image);
      FD.append('category', category);
      FD.append('rating', rating);
      FD.append('numReviews', numReviews);
      FD.append('description', description);
      FD.append('countInStock', countInStock);

      const config = {
        headers: {
          // Accepts: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/products/create`,
        FD,
        config
      );
      // console.log(data);

      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
      // toast.success(data.message, {
      //   position: 'top-center',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light',
      // });
    } catch (error) {
      dispatch({ type: CREATE_PRODUCT_FAIL, payload: handleError(error) });
    }
  };

export const getSingleProductAction =
  (id: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });

      const { addToCart } = getState();
      console.log(addToCart);

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`,
        config
      );

      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_FAIL, payload: handleError(error) });
    }
  };

export const addToCartAction =
  (item: any, cartRedux: { cart: any }) =>
  async (dispatch: any, getState: any) => {
    delete item.countInStock;

    // console.log(cartRedux);

    const isInCart = cartRedux?.cart.length
      ? cartRedux?.cart?.find((x: any) => x?._id === item?._id)
      : null;

    // console.log(cart);

    if (!isInCart) {
      cartRedux?.cart?.push({
        ...item,
        quantity: 1,
      });
    } else {
      cartRedux?.cart?.map((x: any) => {
        if (x?._id === item?._id) {
          x.quantity = x?.quantity + 1;
        }

        return x;
      });
    }

    dispatch({ type: ADD_TO_CART_REQUEST, payload: cartRedux?.cart });
  };

export const removeFromCartAction =
  (item: any, cartRedux: { cart: any }) =>
  async (dispatch: any, getState: any) => {
    const isInCart = cartRedux?.cart.length
      ? cartRedux?.cart?.find((x: any) => x?._id === item?._id)
      : null;

    // console.log(cart);

    if (isInCart.quantity === 1) {
      cartRedux.cart = cartRedux?.cart?.filter(
        (x: any) => x?._id !== item?._id
      );
    } else {
      cartRedux?.cart?.map((x: any) => {
        if (x?._id === item?._id) {
          x.quantity = x?.quantity - 1;
        }

        return x;
      });
    }

    dispatch({ type: ADD_TO_CART_REQUEST, payload: cartRedux?.cart });
  };
