import React from "react";
import onSaleBadgeSvg from "../img/onSaleBadge.svg";

function OnSaleBadge() {
  return (
    <span className="flex justify-center items-center  relative">
      <img src={onSaleBadgeSvg} alt="" />
      <p className="absolute text-center text-[28px] text-white -mt-6 leading-none">
        ON SALE
      </p>
    </span>
  );
}

export default OnSaleBadge;
