import React from 'react';
// import {
//   FaSearch,
//   FaUser,
//   FaAngleDown,
//   FaAngleUp,
//   FaHeart,
//   FaShoppingBag,
//   FaQuestionCircle,
// } from 'react-icons/fa';

// import { RiMessage2Line } from 'react-icons/ri';
// import { BsCartDash } from 'react-icons/bs';

import { logo } from '../../images';
import { Link } from 'react-router-dom';

type Props = {
  image?: String;
};

const BrandImage = (props: Props) => {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <Link to={'/'}>
          {' '}
          <h1 className="font-semibold uppercase text-[#282828]">Jairy Buy</h1>
        </Link>
      </li>
      <li>
        <Link to={'/'}>
          <>
            <img
              src={logo}
              alt="Jairy"
              width={80}
              className=" hidden h-[60px] object-cover  md:block "
            />

            <img
              src={logo}
              alt="Jairy"
              width={40}
              className="h-[30px] object-cover md:hidden bg-[#f68b1e] rounded-full"
            />
          </>
        </Link>
      </li>
    </ul>
  );
};

export default BrandImage;
