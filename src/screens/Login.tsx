import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../redux/actions/user_actions';
import store from '../redux/store';
import { logo } from '../images';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [passwordMisMatch, setPasswordMissMatch] = useState<string>('');
  let {
    loading: loginLoading,
    success: loginSuccess,
    userInfo: loginUserInfo,
    error: loginError,
  } = useSelector((store: any) => store.loginUser);

  const dataFromLocalStorage = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') || '')
    : null;

  loginUserInfo = dataFromLocalStorage;
  // console.log(loginUserInfo);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginUserAction({ email, password }) as any);
  };

  useEffect(() => {
    if (loginSuccess && loginUserInfo) {
      return navigate('/');
    }
  }, [loginSuccess, loginUserInfo]);
  return (
    <div className="w-full max-w-[500px] min-h-[50vh] text-center justify-center m-auto mt-8 border-2 rounded-lg border-[#e7e3e3]">
      <figure>
        <img
          src={logo}
          alt="company logo"
          width={120}
          className="mx-auto   
              h-[140px] object-contain rounded-ful"
        />
      </figure>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
        {loginLoading && <div>Loading...</div>}
        {loginSuccess && <span>{loginUserInfo?.message}</span>}
        {loginError ? <div className="bg-red-500">{loginError}</div> : null}
        <div className=" flex flex-col gap-4 my-5">
          <label
            htmlFor="email"
            className=" w-full max-w-[25rem] m-auto text-left "
          >
            Email :{' '}
          </label>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
              className="  w-full max-w-[25rem] px-[1rem] py-[.8rem] border-none rounded-lg cursor-pointer focus:outline-none active:outline-none"
            />
          </div>
        </div>
        <div className=" flex flex-col   gap-4">
          <label
            htmlFor="password"
            className=" w-full max-w-[25rem] m-auto text-left "
          >
            Password :{' '}
          </label>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
              className=" w-full max-w-[25rem] px-[1rem] py-[.8rem] border-none rounded-lg cursor-pointer focus:outline-none active:outline-none"
            />
          </div>
        </div>
        <div className="w-full max-w-[400px] m-auto bg-[#f68b1e]  text-center mt-11 mb-4 py-2 border-none rounded-lg focus:outline-none active:outline-none">
          <button type="submit" className="font-semibold text-white w-full">
            Continue
          </button>
        </div>
      </form>
      <div>
        <span>Don't have an account? create one now!</span>
        <Link to={'/signup'} className="ml-3 hover:text-[#f68b1e]">
          create account
        </Link>
      </div>
    </div>
  );
};

export default Login;
