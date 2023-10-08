import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// Icons
import shoaLogo from "../../img/shoaLogo.svg";
import shoaLogoWhite from "../../img/shoaLogoWhite.svg";
import { FaBars } from "react-icons/fa";
// Styles
import "./navStyles.css";

function Navigation() {
  const location = useLocation();

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
    <div className="flex container mx-auto items-center justify-between px-16 py-5 xl:py-14 xl:flex">
      <img
        src={shoaLogo}
        alt="Shoa logo"
        className="w-[25px] md:w-[50px] xl:w-[95px]"
      />
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
        <FaBars />
      </div>
    </div>
  );
}

export default Navigation;
