import React, { useState } from 'react';
import { logo } from '../../images';
import { dashboarddata } from '.';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { logoutAction } from '../../redux/actions/user_actions';
import { useDispatch } from 'react-redux';
import { FaPen } from 'react-icons/fa';
import PopUp from '../PopUp';
import { CreateProducts } from '../../screens/adminscreens';
type Props = {};

const Sidebar = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const [selected, setSelected] = useState<Number>(0);
  const logout = () => {
    dispatch(logoutAction() as any);
    // navigate('/login');
  };
  return (
    <div className="py-4 w-full bg-[#fff] ">
      {/* <div className="flex items-center justify-center gap-3  mb-3">
        <img
          src={logo}
          alt="logo"
          width={60}
          className=" hidden h-[60px] object-cover  md:block "
        />
        <span className="text-xl uppercase">Jairy</span>
      </div>
      <hr className="bg-[#f68b1e] h-[3px]" /> */}

      <div
        className={`flex  relative flex-col w-full gap-5 mt-4 justify-center rounded-[.25rem]  transition-all `}
      >
        {dashboarddata.map((x, index) => {
          return (
            <div
              key={index}
              className={`flex flex-1 w-full items-center bg-slate-50 gap-4 px-4 py-3 mt-2 hover:bg-[#f68b1e] hover:text-[#fff] cursor-pointer shadow-sm hover:shadow-xl `}
              onClick={() => navigate(`${x.link}`)}
            >
              <Link to={x.title} className="text-[1.4rem]">
                <x.icon />
              </Link>
              <Link
                to={x.title}
                className="text-[1.2rem] font-semibold capitalize"
              >
                {x.title}
              </Link>
            </div>
          );
        })}

        <div
          className={`flex flex-1 w-full items-center bg-slate-50 gap-4 px-4 py-3 mt-2 hover:bg-[#f68b1e] hover:text-[#fff] cursor-pointer shadow-sm hover:shadow-xl `}
          onClick={() => setOpenModal(true)}
        >
          <button type="button">
            <FaPen className="text-[1.4rem]" />{' '}
            <span className="text-[1.2rem] font-semibold capitalize">
              Create product
            </span>
          </button>
        </div>
        <div
          className="flex flex-col gap-2 justify-center mt-4 min-h-[20vh] items-center"
          onClick={logout}
        >
          <FiLogOut className="text-[1.6rem] animate-pulse cursor-pointer text-red-500" />
          <span className="cursor-pointer text-red-500">LOGOUT</span>
        </div>
      </div>
      {openModal ? (
        <PopUp>
          <CreateProducts setOpen={setOpenModal} />
        </PopUp>
      ) : null}
    </div>
  );
};

export default Sidebar;
