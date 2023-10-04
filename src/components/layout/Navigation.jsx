import React from "react";
import shoaLogo from "../../img/shoaLogo.svg";
import shoaLogoWhite from "../../img/shoaLogoWhite.svg";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const [bgChange, setBgChange] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === "/projects") {
      setBgChange(true);
    } else {
      setBgChange(false);
    }
  }, [location]);

  const style = {
    color: "white",
  };

  return (
    <div
      style={bgChange ? style : null}
      className="flex container mx-auto  align-middle justify-between px-16 py-14 xl:flex"
    >
      <img
        src={bgChange ? shoaLogoWhite : shoaLogo}
        alt="Shoa logo"
        className="w-[50px] xl:w-[95px]"
      />
      <div className="flex space-x-5 font-medium text-sm xl:text-2xl xl:space-x-14 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="partnership-and-development">Partnership & Dev't</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="about-us">About us</NavLink>
        <NavLink to="contact-us">Contact us</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
