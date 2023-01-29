import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  addToCartReducer,
  createProductReducer,
  getSingleProductReducer,
  homeProductsReducer,
  productReducer,
} from './reducers/product_reducer';
import { addSampleReducer } from './reducers/sample.reducer';
import {
  deleteUserReducer,
  getUserReducer,
  updateUserReducer,
  userLoginReducer,
  userSignupReducer,
} from './reducers/user_reducer';

export type StoreReducerTypes = {
  addSample: any;
  signupUser: any;
  loginUser: any;
  allProduct: any;
  allUsers: any;
  updateUser: any;
  deleteUser: any;
  createProduct: any;
  homeProducts: any;
  getSingleProduct: any;
  addToCart: any;
};

const reducer = combineReducers<StoreReducerTypes>({
  addSample: addSampleReducer,
  signupUser: userSignupReducer,
  loginUser: userLoginReducer,
  allProduct: productReducer,
  allUsers: getUserReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
  createProduct: createProductReducer,
  homeProducts: homeProductsReducer,
  getSingleProduct: getSingleProductReducer,
  addToCart: addToCartReducer,
});

const middleware = [thunk];

// type InitialStateType= {
//     login : {}
// }

// const initialState:InitialStateType ={
//     login: {}
// }

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
