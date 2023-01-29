import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const AdminRoutes = ({ children }: Props) => {
  const navigate = useNavigate();

  let { userInfo } = useSelector((store: any) => store.loginUser);
  const dataFromLocalStorage = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') || '')
    : null;

  userInfo = dataFromLocalStorage;
  return (
    <div>
      {userInfo.isAdmin ? (
        <span>{children}</span>
      ) : (
        <button onClick={() => navigate('/login')}>Login</button>
      )}
    </div>
  );
};

export default AdminRoutes;
