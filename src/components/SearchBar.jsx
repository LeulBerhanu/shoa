import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="flex bg-white/[.75] items-center border capitalize rounded-[15px] p-5 justify-between">
      <input
        type="text"
        placeholder="Find your home"
        className=" placeholder-black bg-transparent w-full outline-none"
      />
      <AiOutlineSearch />
    </div>
  );
}

export default SearchBar;
