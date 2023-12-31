import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ search, setSearch }) {
  return (
    <div className="container mx-auto flex bg-white/[.75] items-center border capitalize rounded-[15px] px-4 py-3 justify-between xl:p-5 xl:text-lg">
      <input
        type="text"
        placeholder="Find your home"
        className=" placeholder-black bg-transparent w-full outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="xl:text-2xl">
        <AiOutlineSearch />
      </div>
    </div>
  );
}

export default SearchBar;
