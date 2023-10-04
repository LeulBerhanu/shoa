import React from "react";
import house from "../../img/house.png";
import onSaleBadge from "../../img/onSaleBadge.svg";
import OnSaleBadge from "../OnSaleBadge";
import { Link, useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/projects/id");
  }

  return (
    <div className="flex gap-4 items-center p-5 shadow-boxShadow  rounded-2xl relative">
      <div className="flex relative justify-center">
        <img
          src={house}
          className="max-w-[150px] xl:max-w-[300px]"
          alt="house"
        />
        <button
          onClick={handleClick}
          className="absolute bottom-2  text-xs py-2  w-[90%]  rounded-[15px] bg-[#1E242B]/[.85] text-white font-medium  xl:text-2xl xl:bottom-5 xl:py-5"
        >
          More Details
        </button>
      </div>
      {/* Card Body */}
      <div className="flex flex-col gap-y-5 xl:gap-y-16">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="capitalize break-words text-base leading-tight xl:text-2xl ">
            Bole bulbula site, two bedroom
          </h3>

          {/* Price */}
          <p className="text-xs xl:text-xl">$97,000/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col text-xs xl:text-xl">
          <li>125sqm</li>
          <li>2 Bedrooms</li>
          <li>2 Bathrooms</li>
        </ul>
      </div>

      {/* badge */}
      <div className="absolute top-0 right-3  ">
        <OnSaleBadge />
      </div>
    </div>
  );
}

export default Card;
