import React from "react";
import onSaleBadgeSvg from "../img/onSaleBadge.svg";

function OnSaleBadge() {
  return (
    <span className="flex justify-center items-center  relative w-10 xl:w-16">
      <img src={onSaleBadgeSvg} alt="" />
      <p className="absolute text-center text-xs  text-white  leading-none -mt-2 xl:text-lg xl:leading-none xl:-mt-4 ">
        ON SALE
      </p>
    </span>
  );
}

export default OnSaleBadge;
