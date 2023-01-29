import { Link, useNavigate } from 'react-router-dom';
import {
  FaAngleDown,
  FaAngleUp,
  FaQuestionCircle,
  FaUser,
  FaHeart,
} from 'react-icons/fa';
import { RiMessage2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import store, { StoreReducerTypes } from '../../redux/store';
import { logoutAction } from '../../redux/actions/user_actions';
import { useState } from 'react';

export type TextsType = {
  text: string;
  link: string;
  icon?: 'FaAngleDown' | 'FaUser' | 'RiMessage2Line' | 'FaHeart';
};

type Props = {
  type: 'help' | 'account';
  buttonClick: () => void;
  texts: Array<TextsType>;
  show: boolean;
  showAction: () => void;

  // setShow: (val: any) => void;
};

const NavbarDropdown = ({
  type,
  buttonClick,
  texts,
  show,
  showAction,
}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [display, setDisplay] = useState<boolean>(show);

  //GET USERINFO FROM LOGINUSER

  let { userInfo } = useSelector((store: any) => store.loginUser);
  const dataFromLocalStorage = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') || '')
    : null;

  userInfo = dataFromLocalStorage;

  const logout = () => {
    dispatch(logoutAction() as any);
    navigate('/login');
  };
  return (
    <div className="relative">
      <div
        onClick={buttonClick}
        className={`${
          type === 'account' ? 'bg-[#e7e5e5] p-2 rounded-md' : ''
        } flex items-center gap-2 cursor-pointer hover:text-[#f68b1e]`}
      >
        <span> {type === 'account' ? <FaUser /> : ''}</span>
        <span> {type === 'help' ? <FaQuestionCircle /> : ''}</span>
        <span>
          {type === 'account'
            ? userInfo && userInfo?.isAdmin === true
              ? 'admin'
              : 'account'
            : 'help'}
        </span>
        {show ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      {show ? (
        <div
          className={`absolute left-[-13%] top-[100%] w-[200px] mt-[1.4rem] rounded-xl bg-[white] flex z-40 flex-col  ${
            type === 'help' ? 'flex-col-reverse  left-[-50%]' : ''
          }`}
          onClick={showAction}
        >
          <section className=" w-full m-auto z-40">
            {userInfo && userInfo?.success ? (
              <div className="w-full text-center my-2">
                {userInfo.isAdmin ? (
                  <Link
                    to={'/dashboard'}
                    className="flex justify-center items-center my-3 py-2 text-center hover:bg-[#f68b1e] hover:text-[#fff]  rounded-[.25rem]"
                  >
                    dashboard
                  </Link>
                ) : (
                  ''
                )}
                <button
                  onClick={logout}
                  className="w-full bg-yellow-300 py-2 rounded-sm border-none focus:outline-none"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to={'/signup'}
                className="w-full bg-yellow-300 m-2 py-1 px-11 rounded-sm border-none focus:outline-none"
              >
                Signup
              </Link>
            )}
          </section>
          <hr />

          <section>
            {texts?.map((x, i) => {
              const { icon } = x;
              return (
                <Link
                  to={x.link}
                  key={i}
                  className="flex text-sm  items-center p-2 pl-3"
                >
                  <span>
                    {icon && icon === 'FaHeart' ? (
                      <FaHeart className="mr-2" />
                    ) : null}
                  </span>{' '}
                  <span>
                    {icon && icon === 'FaUser' ? (
                      <FaUser className="mr-2" />
                    ) : null}
                  </span>{' '}
                  <span>
                    {icon && icon === 'RiMessage2Line' ? (
                      <RiMessage2Line className="mr-2" />
                    ) : null}
                  </span>{' '}
                  <span> {x.text}</span>
                </Link>
              );
            })}
          </section>
          {/* <hr />
          {userInfo.isAdmin ? (
            <Link
              to={'/admin'}
              
            >
              Admin Dashboard
            </Link>
          ) : (
            <Link to={'/login'}>Login</Link>
          )} */}
        </div>
      ) : null}
    </div>
  );
};

export default NavbarDropdown;
