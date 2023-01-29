import axios from 'axios';
import { handleError } from '../../utils';
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userconstants';
import { StoreReducerTypes } from '../store';

type UserType = {
  name: string;
  password: string;
  email: string;
};

export const signupUserAction =
  ({ name, password, email }: UserType) =>
  async (
    dispatch: any,
    getState: ({ signupUser }: StoreReducerTypes) => any
  ) => {
    try {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/users/signup',
        {
          name,
          password,
          email,
        },
        config
      );

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: localStorage.setItem('data', JSON.stringify(data)),
      });
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload: handleError(error),
      });
    }
  };

export const loginUserAction =
  ({ email, password }: { email: string; password: string }) =>
  async (
    dispatch: any,
    getState: ({ loginUser }: StoreReducerTypes) => any
  ) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/users/signin',
        { email, password },
        config
      );

      // console.log(data);

      localStorage.setItem('loginUser', JSON.stringify(data));
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
      // console.log({ jhhjh: error });
      dispatch({ type: USER_LOGIN_FAIL, payload: handleError(error) });
    }
  };

export const logoutAction =
  () =>
  async (
    dispatch: any,
    getState: ({ loginUser }: StoreReducerTypes) => any
  ) => {
    try {
      dispatch({ type: USER_LOGOUT });
      localStorage.removeItem('loginUser');
    } catch (error) {
      console.log(error);
    }
  };

// export const getUserAction =
//   () =>
//   async (dispatch: any, getState: ({ allUsers }: StoreReducerTypes) => any) => {
//     try {
//       dispatch({ type: GET_USER_REQUEST });

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };

//       const { data } = await axios.get(
//         'http://localhost:5000/api/users',
//         config
//       );
//       localStorage.setItem('allUsers', JSON.stringify(data));
//       dispatch({ type: GET_USER_SUCCESS, payload: data });
//     } catch (error) {
//       console.log('error');
//       dispatch({ type: GET_USER_FAIL, payload: handleError(error) });
//     }
//   };

export const getUserAction =
  () =>
  async (dispatch: any, getState: ({ allUsers }: StoreReducerTypes) => any) => {
    try {
      dispatch({ type: GET_USER_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        'http://localhost:5000/api/users',
        config
      );
      localStorage.setItem('allUsers', JSON.stringify(data));
      dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_FAIL, payload: handleError(error) });
    }
  };

export const updateUserAction =
  (userId: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        ` http://localhost:5000/api/users/update-user/${userId}`,

        config
      );

      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
      // dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAIL, payload: handleError(error) });
    }
  };

export const deleteUserAction =
  (userId: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
      // console.log('hello');

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        ` http://localhost:5000/api/users/delete-user/${userId}`,

        config
      );

      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
      // dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_USER_FAIL, payload: handleError(error) });
    }
  };
