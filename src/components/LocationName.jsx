import React from "react";
import house from "../img/house.png";

function LocationName({ name, message, closed, rounded, img }) {
  console.log("imageee", img);

  return (
    <div
      className={`flex items-center justify-center relative h-full w-full ${
        rounded ? "rounded-[15px]" : ""
      }`}
    >
      <div className="absolute px-14 text-center text-xl leading-none text-white z-10 xl:text-[50px]">
        <p>{name}</p>
        {message ? <p className="opacity-50 text-sm">{message}</p> : null}
      </div>

      {closed ? (
        <div
          className={`flex items-center absolute w-full h-full  ${
            rounded ? "rounded-[15px]" : ""
          } bg-primary_light py-[73px] px-14 leading-[1.15] `}
        ></div>
      ) : (
        <div
          className={`flex items-center absolute w-full h-full  ${
            rounded ? "rounded-[15px]" : ""
          } bg-primary_light/[.80] py-[73px] px-14 leading-[1.15] `}
        ></div>
      )}
      <img
        src={img}
        className={`w-full h-full object-cover ${
          rounded ? "rounded-[15px]" : ""
        }`}
      />
    </div>
  );
}

export default LocationName;
