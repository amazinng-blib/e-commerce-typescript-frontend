import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

type Props = {};

const SearchBar = (props: Props) => {
  const [search, setSearch] = useState<string>('');
  return (
    <section className="relative gap-4 bg-opacity-40  rounded-md border-2 border-[#c7c7cd]">
      <FaSearch className="absolute top-2 left-3 text-slate-300" />
      <div>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="w-full  placeholder-black px-3 py-1 pl-9 bg-inherit
           focus:outline-none z-20"
        />
      </div>
    </section>
  );
};

export default SearchBar;
