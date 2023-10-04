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
    <div className="flex gap-9 items-center px-9 py-8 shadow-boxShadow w-full rounded-2xl relative">
      <div className="flex relative justify-center">
        <img src={house} className="max-w-430px" alt="house" />
        <button
          onClick={handleClick}
          className="absolute  bottom-5  w-[90%] py-5 rounded-[15px] bg-[#1E242B]/[.85] text-white font-medium  xl:text-2xl "
        >
          More Details
        </button>
      </div>
      {/* Card Body */}
      <div className="flex flex-col gap-y-16">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="capitalize break-words  text-2xl xl:text-5xl xl:font-light">
            Bole bulbula site, two bedroom
          </h3>

          {/* Price */}
          <p className="text-xl">$97,000/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col gap-y-4 text-xl xl:text-3xl">
          <li>125sqm</li>
          <li>2 Bedrooms</li>
          <li>2 Bathrooms</li>
        </ul>
      </div>

      {/* badge */}
      <div className="absolute top-0 right-10">
        <OnSaleBadge />
      </div>
    </div>
  );
}

export default Card;
