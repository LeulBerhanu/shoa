import React from "react";
import shoa from "../../../img/shoaLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { LiaBuildingSolid } from "react-icons/lia";
import blogIcon from "../../../img/blog_svgrepo.com.svg";

const navLinkStyle = "py-5 flex gap-x-2 items-center cursor-pointer";

function Sidebar() {
  return (
    <div className="flex flex-col gap-20 items-center w-[368px] px-4 bg-white">
      <img src={shoa} alt="shoa logo" className="w-16 my-11 lg:w-24" />
      <ul className="flex flex-col lg:text-2xl text-base">
        <Link to="." className={navLinkStyle}>
          <BiSolidDashboard />
          <p className="cursor-pointer">Dashboard</p>
        </Link>
        <Link to="site" className={navLinkStyle}>
          <FaCity />
          <p className="cursor-pointer">Site</p>
        </Link>
        <Link to="property" className={navLinkStyle}>
          <LiaBuildingSolid />
          <p className="cursor-pointer">Property</p>
        </Link>
        <Link to="blog" className={navLinkStyle}>
          <img src={blogIcon} className="md:w-[16px]" />
          <p className="cursor-pointer">Blog</p>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
