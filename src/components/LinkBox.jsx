import React from "react";
import { Link } from "react-router-dom";

import apartment from "../img/apartment.jpg";
import upRightArrow from "../img/topRightArrow.svg";

function LinkBox({ content }) {
  return (
    <Link
      to="/blog/id"
      className="transition duration-1000 flex h-full w-full relative font-light group cursor-pointer"
    >
      <p className="z-20 text-white leading-tight md:text-3xl xl:text-[49px] xl:leading-normal w-[380px] m-14">
        {content}
      </p>

      {/* icon */}
      <img
        src={upRightArrow}
        alt="up right arrow icon"
        className="absolute bottom-8 right-8 z-20 w-[15px] md:w-[20px] xl:w-auto"
      />

      {/* color overlay */}
      <div className="transition duration-300 group-hover:bg-primary_light z-10 bg-primary_light/[.8] absolute w-full h-full"></div>

      {/* background image */}
      <img src={apartment} className=" absolute w-full h-full object-cover " />
    </Link>
  );
}

export default LinkBox;
