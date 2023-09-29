import React from "react";
import house from "../../img/house.png";

function SmallCard() {
  return (
    <div className="flex gap-9 items-center px-5 py-4 shadow-boxShadow w-[610px] rounded-2xl">
      <img src={house} className="max-w-[278px]" alt="house" />
      {/* Card Body */}
      <div className="flex flex-col gap-y-16">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="capitalize break-words text-2xl">
            Bole bulbula site, two bedroom
          </h3>

          {/* Price */}
          <p className="text-base font-medium">$97,000/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col text-xl gap-y-3 ">
          <li>125sqm</li>
          <li>2 Bedrooms</li>
          <li>2 Bathrooms</li>
        </ul>
      </div>
    </div>
  );
}

export default SmallCard;
