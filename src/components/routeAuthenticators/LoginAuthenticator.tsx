import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const LoginAuthenticator = ({ children }: Props) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((store: any) => store.loginUser);
  console.log(userInfo);
  return (
    <div>
      {' '}
      {userInfo ? (
        <span>{children}</span>
      ) : (
        <button type="button" onClick={() => navigate('/login')}>
          Login{' '}
        </button>
      )}
    </div>
  );
};

export default LoginAuthenticator;
