import React from "react";
import onSaleBadgeSvg from "../img/onSaleBadge.svg";

function OnSaleBadge() {
  return (
    <span className="flex justify-center  relative">
      <img src={onSaleBadgeSvg} alt="" />
      <p className="absolute text-center text-[28px] text-white -mt-1">
        ON <br /> SALE
      </p>
    </span>
  );
}

export default OnSaleBadge;
