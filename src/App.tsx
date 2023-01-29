import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminRoutes from './components/AdminRoutes';
import Layout from './components/Layout';
import {
  AdminDashBoard,
  CartScreen,
  Home,
  Login,
  Signup,
  SingleProductScreen,
} from './screens';
import {
  CustomerScreen,
  OrderScreen,
  ProductsScreen,
} from './screens/adminscreens';

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />{' '}
          <Route path="/cart" element={<CartScreen />} />{' '}
          <Route path="/product/:id" element={<SingleProductScreen />} />{' '}
          <Route
            path="/dashboard"
            element={
              <AdminRoutes>
                <AdminDashBoard />{' '}
              </AdminRoutes>
            }
          />
          <Route
            path="/dashboard/customers"
            element={
              <AdminRoutes>
                <CustomerScreen />{' '}
              </AdminRoutes>
            }
          />
          {/* UPDATE USER ROUTE */}
          {/* <Route
            path="/dashboard/customers/update-user/:id"
            element={
              <AdminRoutes>
                <UpdateUser />{' '}
              </AdminRoutes>
            }
          /> */}
          <Route
            path="/dashboard/orders"
            element={
              <AdminRoutes>
                <OrderScreen />{' '}
              </AdminRoutes>
            }
          />
          <Route
            path="/dashboard/product"
            element={
              <AdminRoutes>
                <ProductsScreen />{' '}
              </AdminRoutes>
            }
          />
          {/* <Route
            path="/dashboard/create"
            element={
              <AdminRoutes>
                <CreateProducts />{' '}
              </AdminRoutes>
            }
          /> */}
        </Routes>
      </Layout>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default App;
