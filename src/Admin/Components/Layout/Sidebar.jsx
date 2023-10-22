import React from "react";
import shoa from "../../../img/shoaLogo.svg";
import { Link, NavLink } from "react-router-dom";

const navLinkStyle = "py-5";

function Sidebar() {
  return (
    <div className="flex flex-col gap-20 items-center w-[368px] bg-white">
      <img src={shoa} alt="shoa logo" className="w-24 my-11" />
      <ul className="flex flex-col text-2xl">
        <Link to="." className={navLinkStyle}>
          Dashboard
        </Link>
        <Link to="site" className={navLinkStyle}>
          Site
        </Link>
        <Link to="" className={navLinkStyle}>
          Featured Site
        </Link>
        <Link to="property" className={navLinkStyle}>
          Property
        </Link>
        <Link to="blog" className={navLinkStyle}>
          Blog
        </Link>
        <Link to="" className={navLinkStyle}>
          Contact us
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
