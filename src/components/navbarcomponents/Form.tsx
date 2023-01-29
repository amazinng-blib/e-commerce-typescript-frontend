import React, { useState } from 'react';
import {
  FaSearch,
  // FaUser,
  // FaAngleDown,
  // FaAngleUp,
  // FaHeart,
  // FaShoppingBag,
  // FaQuestionCircle,
} from 'react-icons/fa';

type Props = {};

const Form = (props: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('hello');
  };
  return (
    <form
      className="flex-1 flex justify-end items-center gap-2"
      onSubmit={handleSubmit}
    >
      <section className=" relative bg-opacity-40   items-center w-full max-w-[600px] gap-4 rounded-md border-2 border-[#c7c7cd]">
        <FaSearch className="absolute top-2 left-3 -z-10" />
        <div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
            className="w-full  placeholder-black px-3 py-1 pl-9 bg-inherit focus:outline-none "
          />
        </div>
      </section>
      <button className="capitalize bg-[#f68b1e] text-white px-5 py-1 border-none rounded hover:bg-[#a86119]">
        submit
      </button>
    </form>
  );
};

export default Form;
