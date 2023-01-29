import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaTimes } from 'react-icons/fa';
import MobileDropdown, { Tests } from './MobileDropdown';
import { Link } from 'react-router-dom';
import BrandImage from '../navbarcomponents/BrandImage';

// car icon import {BsCart} from 'react-icons/bs'

const account: Array<Tests> = [
  {
    link: '/orders',
    text: 'orders',
    icon: 'shoppingBag',
  },
  {
    link: '/pending-reviews',
    text: 'Pending Reviews',
    icon: 'messageEdit',
  },
  {
    link: '/voucher',
    text: 'Voucher',
    icon: 'gift',
  },
  {
    link: '/save-items',
    text: 'Save Items',
    icon: 'heart',
  },
];
const category: Array<Tests> = [
  {
    link: '/supermarket',
    text: 'Supermarket',
    icon: 'apple',
  },
  {
    link: '/health-beauty',
    text: 'Health & Beauty',
    icon: 'health',
  },
  {
    link: '/home-office',
    text: 'Home & Office',
    icon: 'office',
  },
  {
    link: '/phone-tablets',
    text: 'Phone & Tablets',
    icon: 'phone',
  },
  {
    link: '/computing',
    text: 'Computing',
    icon: 'computer',
  },
  {
    link: '/electronics',
    text: 'Electronics',
    icon: 'personalcomputer',
  },
  {
    link: `/women's-fashone`,
    text: `women's Fashion`,
    icon: 'traveldress',
  },
  {
    link: `/men's-fashion`,
    text: `Men's Fashion`,
    icon: 'poloshirt',
  },
  {
    link: '/baby-products',
    text: 'Baby Products',
    icon: 'toy',
  },
  {
    link: '/gaming',
    text: 'Gaming',
    icon: 'game',
  },
  {
    link: '/sporting-goods',
    text: 'Sporting Goods',
    icon: 'vollyball',
  },
  {
    link: '/automobile',
    text: 'Automobile',
    icon: 'car',
  },
];

const services: Array<Tests> = [
  {
    link: '/jairy-prime',
    text: 'Jairy Prime',
    icon: 'star',
  },
  {
    link: '/pay-airtime-bills',
    text: 'Pay Airtime & Bills',
    icon: 'star',
  },
  {
    link: '/pay-electric-bills',
    text: 'Pay Elecric Bills',
    icon: 'star',
  },
  {
    link: '/pay-internet-bills',
    text: 'Pay Internet Bills',
    icon: 'star',
  },
  {
    link: '/buy-data',
    text: 'Buy Data',
    icon: 'star',
  },
  {
    link: '/jairy-food',
    text: 'Jairy Food',
    icon: 'drippingstar',
  },
];

type Props = {};

const HamburgerButton = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section>
      {open ? (
        <section className="hide-scroll-bar fixed w-[100%] max-w-[500px] overflow-auto top-0 left-0 bottom-0 z-30 bg-white ">
          <div className="flex items-center mt-4 mb-4 gap-14 ml-7">
            <FaTimes
              onClick={handleClick}
              className=" m-2 text-2xl bg-stone-200"
            />
            <BrandImage />
          </div>
          <hr />

          <MobileDropdown type="my-jairy-account" tests={account} show={open} />
          <MobileDropdown type="our-categories" tests={category} show={open} />
          <MobileDropdown type="our-services" tests={services} show={open} />
          <div className="flex flex-col ml-7 gap-3 mb-4 mt-2  font-medium">
            <Link to={'/sell-on-jairy'}> Sell on Jairy</Link>
            <Link to={'/contact-us'}> Contact Us</Link>
            <Link to={'/help-center'}> Help Center</Link>
          </div>
        </section>
      ) : (
        <RxHamburgerMenu onClick={handleClick} />
      )}
    </section>
  );
};

export default HamburgerButton;
