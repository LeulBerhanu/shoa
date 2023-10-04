import React from "react";
import onSaleBadgeSvg from "../img/onSaleBadge.svg";

function OnSaleBadge() {
  return (
    <span className="flex justify-center items-center w-[60px] relative xl:w-auto">
      <img src={onSaleBadgeSvg} alt="" />
      <p className="absolute text-center text-base text-white -mt-4 leading-none xl:text-[28px] xl:-mt-6">
        ON SALE
      </p>
    </span>
  );
}

export default OnSaleBadge;
