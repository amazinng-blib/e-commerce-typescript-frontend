import React from 'react';
import { AdminHero } from '../components/adminhero';
import RecentOrders from '../components/adminrecentorders/RecentOrders';
import { Sidebar } from '../components/adminsidebar';

type Props = {};

const AdminDashBoard = (props: Props) => {
  return (
    <div className="flex h-[100vh] w-full justify-center ">
      <div className="w-full grid grid-cols-[15rem_auto_20rem] gap-[.125rem] bg-[#e29191] overflow-hidden">
        <Sidebar />
        <AdminHero />
        <RecentOrders />
      </div>
    </div>
  );
};

export default AdminDashBoard;
