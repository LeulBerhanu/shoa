import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// Icons
import shoaLogo from "../../img/shoaLogo.svg";
import shoaLogoWhite from "../../img/shoaLogoWhite.svg";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
// Styles
import "./navStyles.css";

function Navigation() {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle((prev) => !prev);
  }

  useEffect(() => {
    setToggle(false);
  }, [location]);

  // const [bgChange, setBgChange] = React.useState(false);

  // React.useEffect(() => {
  //   if (location.pathname === "/projects") {
  //     setBgChange(true);
  //   } else {
  //     setBgChange(false);
  //   }
  // }, [location]);

  // const style = {
  //   color: "white",
  // };

  return (
    <div>
      <div className="flex container relative mx-auto items-center justify-between px-5 py-5 md:px-16 xl:py-14 xl:flex">
        <img src={shoaLogo} alt="Shoa logo" className="w-[50px] xl:w-[95px]" />
        <div className="hidden space-x-5 font-medium text-sm md:flex xl:text-2xl xl:space-x-14 items-center relative">
          <NavLink className="relative" to="/">
            Home
          </NavLink>
          <NavLink
            className={
              location.pathname.includes("/blog/")
                ? "active relative"
                : ({ isActive }) => (isActive ? "active relative" : "")
            }
            to="blog"
          >
            Blog
          </NavLink>
          <NavLink className="relative" to="partnership-and-development">
            Partnership & Dev't
          </NavLink>
          <NavLink
            className={
              location.pathname.includes("/projects/")
                ? "active relative"
                : ({ isActive }) => (isActive ? "active relative" : "")
            }
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink className="relative" to="about-us">
            About us
          </NavLink>
          <NavLink className="relative" to="contact-us">
            Contact us
          </NavLink>
        </div>
        <div className="text-primary md:hidden">
          <button onClick={toggleMenu} className="outline-none text-[30px]">
            {toggle ? <GrClose /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`${toggle ? "block" : "hidden"}  z-50 pb-4 md:hidden`}>
        <div className="bg-white  w-screen flex flex-col gap-4 pt-4 px-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-mobile relative" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={
              location.pathname.includes("/blog/")
                ? "active-mobile relative"
                : ({ isActive }) => (isActive ? "active-mobile relative" : "")
            }
            to="blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-mobile relative" : ""
            }
            to="partnership-and-development"
          >
            Partnership & Dev't
          </NavLink>
          <NavLink
            className={
              location.pathname.includes("/projects/")
                ? "active-mobile relative"
                : ({ isActive }) => (isActive ? "active-mobile relative" : "")
            }
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-mobile relative" : ""
            }
            to="about-us"
          >
            About us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-mobile relative" : ""
            }
            to="contact-us"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
