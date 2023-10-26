import React from "react";
import house from "../../img/house.png";
import onSaleBadge from "../../img/onSaleBadge.svg";
import OnSaleBadge from "../OnSaleBadge";
import { Link } from "react-router-dom";

function Card({ item }) {
  console.log("item", item);
  return (
    <div className="flex flex-col gap-4 items-center p-5  shadow-boxShadow rounded-2xl relative w-[500px] md:flex-row">
      <div className="flex relative justify-center ">
        <img
          src={item.propertyImage.url}
          className="w-[244px] h-[244px] rounded-lg object-cover md:max-w-[430px] xl:max-w-[300px]  "
          alt="house"
        />
        <Link
          to={`/projects/${item._id}`}
          className=" absolute bottom-2 flex justify-center py-2  w-[90%]  rounded-[15px] bg-[#1E242B]/[.85] text-white  text-xl md:font-medium xl:text-2xl xl:bottom-5 xl:py-5"
        >
          <button>More Details</button>
        </Link>
      </div>
      {/* Card Body */}
      <div className="flex flex-col gap-y-5 md:self-auto xl:gap-y-8 xl:self-center">
        {/* Title and Price */}
        <div>
          {/* Title */}
          <h3 className="capitalize break-words leading-tight text-[28px] xl:text-2xl ">
            {item?.name}
          </h3>

          {/* Price */}
          <p className="font-medium xl:text-xl">${item?.price}/sqm</p>
        </div>

        {/* Details */}
        <ul className="flex flex-col text-xl xl:text-xl">
          <li>{item?.size}</li>
          <li>{item?.bedRoom} bedrooms</li>
          <li>{item?.bathRoom} bathrooms</li>
        </ul>
      </div>

      {/* badge */}
      {item?.sellingStatus === "on-sale" && (
        <div className="absolute top-0 right-3  ">
          <OnSaleBadge />
        </div>
      )}
    </div>
  );
}

export default Card;
