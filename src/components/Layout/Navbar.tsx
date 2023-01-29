import React, { useState } from 'react';
import { FaUser, FaShoppingBag } from 'react-icons/fa';

import BrandImage from '../navbarcomponents/BrandImage';
import { Cart, NavbarDropdown, Form } from '../navbarcomponents';
import { TextsType } from '../navbarcomponents/NavbarDropdown';

import { HamburgerButton, SearchBar } from '../mobile';

const acc: Array<TextsType> = [
  {
    link: '/accounts',
    text: `My Account`,
    icon: 'FaUser',
  },
  {
    link: '/order',
    text: 'Orders',
    icon: 'RiMessage2Line',
  },
  {
    link: '/save-items',
    text: 'Save Items',
    icon: 'FaHeart',
  },
];

const hel: Array<TextsType> = [
  {
    link: '/help',
    text: 'Help Center',
  },
  {
    link: '/track',
    text: 'Place and Track Order',
  },
  {
    link: '/order-cancellation',
    text: 'Order Cancellation',
  },
  {
    link: '/return-funds',
    text: 'Return  &Funds',
  },
  {
    link: '/payment-jumia-account',
    text: 'Payment & Jumia Account',
  },
];

type Props = {};

const Navbar = (props: Props) => {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showAcc, setShowAcc] = useState<boolean>(false);

  return (
    <>
      <nav className="md:hidden flex flex-col bg-red w-full fixed top-0 right-0 left-0">
        <section className="p-2">
          <section className="flex justify-between mb-4">
            <HamburgerButton />
            <div className="flex gap-3">
              <FaUser className="text-slate-500 hover:text-[#f68b1e]" />{' '}
              <FaShoppingBag className="text-slate-500 hover:text-[#f68b1e]" />
            </div>
          </section>

          <SearchBar />
        </section>
      </nav>
      <nav className="hidden md:flex  flex-row z-[10]  m-auto bg-white h-14 border-transparent px-5  items-center bg-red w-full fixed top-0 right-0 left-0 ">
        <BrandImage />
        <div className="flex-1 flex gap-[5%] ">
          <Form />
          <NavbarDropdown
            type="account"
            buttonClick={() => {
              setShowHelp(false);
              setShowAcc((prev) => !prev);
            }}
            texts={acc}
            show={showAcc}
            showAction={() => setShowAcc(false)}
          />

          <NavbarDropdown
            type="help"
            buttonClick={() => {
              setShowAcc(false);
              setShowHelp((prev) => !prev);
            }}
            texts={hel}
            show={showHelp}
            showAction={() => setShowHelp(false)}
          />

          <Cart />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
