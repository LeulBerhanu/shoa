import React from "react";
import shoaLogo from "../../img/shoaLogo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex align-middle justify-between px-16">
      <img src={shoaLogo} alt="Shoa logo" />
      <div className="flex space-x-14 font-medium text-2xl items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">Blog</NavLink>
        <NavLink to="#">Partnership & Dev't</NavLink>
        <NavLink to="#">Projects</NavLink>
        <NavLink to="#">About us</NavLink>
        <NavLink to="#">Contact us</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
