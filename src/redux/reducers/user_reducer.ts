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

type StateType = {
  loading: boolean;
  success: boolean;
  error: any;
  userInfo: any;
};

// const dataFromLocalStorage = localStorage.getItem('data')
//   ? JSON.parse(localStorage.getItem('data') || '')
//   : null;

const initialState: StateType = {
  loading: false,
  success: false,
  error: '',
  userInfo: {},
};

export const userSignupReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };

    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        success: true,
        error: '',
        userInfo: action.payload,
      };

    case USER_SIGNUP_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

// export const getUserReducer = (
//   state: StateType = initialState,
//   action: any
// ) => {
//   switch (action.type) {
//     case GET_USER_REQUEST:
//       return { loading: true };

//     case GET_USER_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//         userInfo: action.payload,
//       };

//     case GET_USER_FAIL:
//       return {
//         Loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }

export const getUserReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };

    case GET_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        error: '',
        userInfo: action.payload,
      };

    case GET_USER_FAIL:
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const updateUserReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { loading: true };

    case UPDATE_USER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteUserReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { loading: true };

    case DELETE_USER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case DELETE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
