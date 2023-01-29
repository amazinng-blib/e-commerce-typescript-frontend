import React from 'react';
import { AdminTable, TotalCustomers, TotalOrder, TotalProducts } from '.';

type Props = {};

const AdminHero = (props: Props) => {
  return (
    <div className=" bg-[#fff] text-[#222]">
      <h2 className="text-center font-semibold uppercase mt-5">
        Admin Dashboard
      </h2>
      <div className="flex justify-around mt-8">
        <TotalCustomers />
        <TotalProducts />
        <TotalOrder />
      </div>
      <AdminTable />
    </div>
  );
};

export default AdminHero;
