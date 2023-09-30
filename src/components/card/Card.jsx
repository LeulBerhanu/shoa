import React from "react";
import house from "../../img/house.png";
import onSaleBadge from "../../img/onSaleBadge.svg";
import OnSaleBadge from "../OnSaleBadge";

function Card() {
  return (
    <div className="flex gap-9 items-center px-9 py-8 shadow-boxShadow w-full rounded-2xl relative">
      <img src={house} className="max-w-430px" alt="house" />
      {/* Card Body */}
      <div className="flex flex-col gap-y-16">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="capitalize break-words text-5xl font-light">
            Bole bulbula site, two bedroom
          </h3>

          {/* Price */}
          <p className="text-xl">$97,000/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col text-3xl gap-y-4">
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
