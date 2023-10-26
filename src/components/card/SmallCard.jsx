import React from "react";
import house from "../../img/house.png";

function SmallCard({ item, discountBadge, onSaleBadge }) {
  console.log("featured", item);
  return (
    <div className="flex flex-col gap-x-9 gap-y-4 md:items-center px-5 py-7 shadow-boxShadow md:w-[610px] rounded-2xl relative md:flex-row">
      <img
        src={item?.propertyImage.url}
        className="w-[244px] h-[244px] object-cover rounded-2xl"
        alt="house"
      />
      {/* Card Body */}
      <div className="flex flex-col ">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="leading-none capitalize break-words text-[28px]">
            {item?.name}
          </h3>

          {/* Price */}
          <p className="text-base font-medium py-3">${item?.price}/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col text-xl  ">
          <li>{item?.size}</li>
          <li>{item?.bedroom} Bedrooms</li>
          <li>{item?.bathroom} Bathrooms</li>
        </ul>
      </div>

      {/* Badge */}
      {item?.sellingStatus === "discount" && (
        <div className="bg-badge_discount absolute top-0 right-0 rounded-[15px] p-2">
          {item?.featuredStatement || "Discount"}
        </div>
      )}

      {item?.sellingStatus === "sold-out" && (
        <div className="bg-badge_soldOut absolute top-0 right-0 rounded-[15px] py-2 px-5 text-white uppercase">
          Sold Out
        </div>
      )}

      {item?.sellingStatus === "on-sale" && (
        <div className="bg-badge_onsale absolute top-0 right-0 rounded-[15px] py-2 px-5 text-white uppercase">
          On Sale
        </div>
      )}
    </div>
  );
}

export default SmallCard;
