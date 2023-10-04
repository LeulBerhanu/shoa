import React from "react";
import house from "../img/house.png";

function PageBanner({ name }) {
  return (
    <div className="flex items-center relative h-[300px] xl:h-[500px] ">
      <p className="absolute px-14 text-6xl text-white z-10 xl:text-[79px]">
        {name}
      </p>
      <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] "></div>
      <img src={house} className="w-full h-full object-cover rounded-[15px]" />
    </div>
  );
}

export default PageBanner;