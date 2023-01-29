import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { logo } from '../images';
import { signupUserAction } from '../redux/actions/user_actions';
import store from '../redux/store';

type Props = {};

const Signup = (props: Props) => {
  const dispatch = useDispatch();

  let {
    loading: signupLoading,
    success: signupSuccess,
    userInfo: signupUserInfo,
    error: signupError,
  } = useSelector((store: any) => store.signupUser);

  const dataFromLocalStorage = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data') || '')
    : null;

  signupUserInfo = dataFromLocalStorage;

  // console.log(signupUserInfo);

  const [name, setName] = useState(signupUserInfo?.name || '');
  const [email, setEmail] = useState(signupUserInfo?.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMisMatch, setPasswordMissMatch] = useState('');

  // const { userInfo } = initialState;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setPasswordMissMatch('password do not match');
    } else {
      dispatch(signupUserAction({ name, email, password }) as any);
    }
  };

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
        <div>
          {signupLoading && <div>Loading...</div>}
          {signupSuccess && (
            <div>
              {signupUserInfo?.message
                ? signupUserInfo?.message
                : signupUserInfo}
            </div>
          )}
          {signupError && <div>{signupError}</div>}
        </div>
        <div className=" flex flex-col gap-4 my-5">
          <label
            htmlFor="name"
            className=" w-full max-w-[22rem] m-auto text-left "
          >
            Name:{' '}
          </label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="  w-full max-w-[22rem] px-[1rem] py-[.8rem] border-none rounded-lg cursor-pointer focus:outline-none active:outline-none"
            />
          </div>
        </div>
        <div className=" flex flex-col   gap-4">
          <label
            htmlFor="email"
            className=" w-full max-w-[22rem] m-auto text-left "
          >
            Email:{' '}
          </label>
          <div>
            <input
              type="text"
              name="emai"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="  w-full max-w-[22rem] px-[1rem] py-[.8rem] border-none rounded-lg cursor-pointer focus:outline-none active:outline-none"
            />
          </div>
        </div>

        <div className=" flex flex-col   gap-4">
          {passwordMisMatch && (
            <div className="bg-[#cf7373]">{passwordMisMatch}</div>
          )}
          <label
            htmlFor="password"
            className=" w-full max-w-[22rem] m-auto text-left "
          >
            Password:{' '}
          </label>

          <div>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="  w-full max-w-[22rem] px-[1rem] py-[.8rem] border-none rounded-lg cursor-pointer focus:outline-none active:outline-none"
            />
          </div>
        </div>
        <div className=" flex flex-col   gap-4">
          <label
            htmlFor="confirmPassword"
            className=" w-full max-w-[22rem] m-auto text-left "
          >
            Confirm Password:{' '}
          </label>
          <div>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="  w-full max-w-[22rem] px-[1rem] py-[.8rem] border-none rounded-lg cursor-pointer focus:outline-none active:outline-none"
            />
          </div>
        </div>

        <div className="w-full max-w-[400px] m-auto bg-[#f68b1e]  text-center mt-11 mb-4 py-2 border-none rounded-lg focus:outline-none active:outline-none">
          <button type="submit" className="font-semibold text-white w-full">
            Continue
          </button>
        </div>
        <div>
          <span>Already have an account?login now</span>
          <Link to={'/login'} className="ml-3 hover:text-[#f68b1e]">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
