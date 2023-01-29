import React, { Component, useEffect, useState } from 'react';
import { FaCheck, FaPen, FaTimes, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { UpdatePopUp } from '../../components/adminhero';
import PopUp from '../../components/PopUp';
import {
  deleteUserAction,
  getUserAction,
  updateUserAction,
} from '../../redux/actions/user_actions';
import CreateProducts from './CreateProducts';

type Props = {};

const CustomerScreen = (props: Props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState<boolean>(false);

  // const location = useLocation().pathname;

  // const locationId = location + '/hello';

  // console.log(locationId);

  let {
    loading: userLoading,
    success: userSuccess,
    userInfo: userUserInfo,
    error: userError,
  } = useSelector((store: any) => store.allUsers);

  // const [admin, setAdmin] = useState(false) as any;

  // const {
  //   loading: userUpdateLoading,
  //   success: updateUserSuccess,
  //   userInfo: updateUserInfo,
  // } = useSelector((store: any) => store.updateUser);

  const dataFromLocalStorage = localStorage.getItem('allUsers')
    ? JSON.parse(localStorage.getItem('allUsers') || '')
    : null;

  userUserInfo = dataFromLocalStorage;
  // console.log(userUserInfo);

  useEffect(() => {
    dispatch(getUserAction() as any);
  }, []);

  const handleUpdate = (id: any) => {
    dispatch(updateUserAction(id) as any);
    dispatch(getUserAction() as any);
  };

  const deleteUser = (id: any) => {
    window.alert(
      'You are about to delete this user PARMANENTLY. Do you want to proceed?'
    );
    dispatch(deleteUserAction(id) as any);
    dispatch(getUserAction() as any);
  };

  return (
    <div className=" relative h-[100vh] mt-8">
      <header className=" text-center my-6 font-semibold uppercase">
        {' '}
        <h2>Customers' List</h2>
      </header>
      {/* <UpdatePopUp /> */}

      <div className="w-full grid grid-cols-[15rem_auto] gap-[.125rem]">
        <header className="flex flex-col gap-8 bg-slate-200  ">
          <p className="bg-white hover:bg-[#f68b1e] hover:text-white rounded-[.25rem] shadow-xl">
            <button
              onClick={() => navigate('/dashboard')}
              className=" w-full  px-4 py-4  "
            >
              Dashboard
            </button>
          </p>

          <p className="bg-white hover:bg-[#f68b1e] hover:text-white rounded-[.25rem] shadow-xl">
            <button
              type="button"
              className="w-full  px-4 py-4  "
              onClick={() => setOpenModal(true)}
            >
              {' '}
              Create New Product
            </button>

            {/* <button onClick={() => console.log(location)}>click me</button> */}
          </p>
        </header>

        <section>
          <table
            className={` w-full  m-auto  border-2 rounded-[.75rem] text-left`}
          >
            <thead className=" ">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">ID</th>
                <th className="p-3">Admin</th>
                {/* <th className="p-3">Delete user</th> */}
              </tr>
            </thead>

            {userUserInfo?.users?.map((data: any, index: any) => {
              const even = index % 2 === 0;

              return (
                <tbody
                  key={index}
                  className={`${even ? 'bg-[#eeeeee]' : 'bg-white'} p-8 mb-4`}
                >
                  <tr>
                    <td className="font-semibold uppercase pl-4">
                      {data?.name}
                    </td>
                    <td className="p-3 capitalize">{data?.email}</td>
                    <td className="p-3 capitalize">{data?._id}</td>
                    <td className="flex items-center text-[#fff] bg-[gray] gap-6  justify-center p-3 cursor-pointer mb-3 mt-3">
                      <span> {data?.isAdmin ? <FaCheck /> : <FaTimes />}</span>{' '}
                      <span>
                        <FaPen onClick={() => handleUpdate(data?._id)} />
                      </span>
                    </td>
                    <td className="p-2 text-[#FFF] bg-[#ec5a5a] flex justify-center items-center gap-2 cursor-pointer ">
                      <span className="scale-75">
                        <FaTrash onClick={() => deleteUser(data?._id)} />
                      </span>
                      <span className="text-[#fff]"> remove</span>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </section>
      </div>
      {openModal ? (
        <PopUp>
          <CreateProducts setOpen={setOpenModal} />
        </PopUp>
      ) : null}
    </div>
  );
};

export default CustomerScreen;
