import React from "react";
import apartment from "../img/apartment.jpg";
import upRightArrow from "../img/topRightArrow.svg";

function LinkBox({ content }) {
  return (
    <div className="flex h-full w-full relative font-light">
      <p className="z-20 text-white leading-tight text-3xl xl:text-[49px] w-[380px] m-14">
        {content}
      </p>

      {/* icon */}
      <img
        src={upRightArrow}
        alt="up right arrow icon"
        className="absolute bottom-8 right-8 z-20 w-[20px] xl:w-auto"
      />

      {/* color overlay */}
      <div className="z-10 bg-primary_light/[.8] absolute w-full h-full"></div>

      {/* background image */}
      <img src={apartment} className="absolute w-full h-full object-cover" />
    </div>
  );
}

export default LinkBox;
