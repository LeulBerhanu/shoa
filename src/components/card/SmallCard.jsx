import React from "react";
import house from "../../img/house.png";

function SmallCard({ discountBadge, onSaleBadge }) {
  return (
    <div className="flex flex-col gap-x-9 gap-y-4 md:items-center px-5 py-12 shadow-boxShadow md:w-[610px] rounded-2xl relative md:flex-row">
      <img src={house} className="max-w-[244px]" alt="house" />
      {/* Card Body */}
      <div className="flex flex-col ">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="leading-none capitalize break-words text-[28px]">
            Bole bulbula site, <br /> two bedroom
          </h3>

          {/* Price */}
          <p className="text-base font-medium py-3">$97,000/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col text-xl  ">
          <li>125sqm</li>
          <li>2 Bedrooms</li>
          <li>2 Bathrooms</li>
        </ul>
      </div>

      {/* Badge */}
      {discountBadge && (
        <div className="bg-badge_discount absolute top-0 right-0 rounded-[15px] p-2">
          Holiday Discount
        </div>
      )}

      {onSaleBadge && (
        <div className="bg-badge_onsale absolute top-0 right-0 rounded-[15px] py-2 px-5 text-white uppercase">
          On Sale
        </div>
      )}
    </div>
  );
}

export default SmallCard;
