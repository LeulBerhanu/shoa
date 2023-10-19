import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function LinkBoxHomePage({ content, id }) {
  return (
    <div className="relative border py-20 leading-none md:p-11">
      <Link to={`/blog/${id}`}>{content}</Link>
      <i className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
        <HiOutlineArrowUpRight />
      </i>
    </div>
  );
}

export default LinkBoxHomePage;
