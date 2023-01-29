import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#f5f5f5] relative">
      <Navbar />
      {children}
      <div className=" m-auto bg-[green] flex justify-center mb-6 ">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
