import React from "react";
import shoaLogo from "../../img/shoaLogo.svg";
import shoaLogoWhite from "../../img/shoaLogoWhite.svg";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
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
    <nav
      style={bgChange ? style : null}
      className="container mx-auto flex align-middle justify-between px-16 py-14"
    >
      <img
        src={bgChange ? shoaLogoWhite : shoaLogo}
        alt="Shoa logo"
        className="w-[95px]"
      />
      <div className="flex space-x-14 font-medium text-2xl items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="partnership-and-development">Partnership & Dev't</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="about-us">About us</NavLink>
        <NavLink to="contact-us">Contact us</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
