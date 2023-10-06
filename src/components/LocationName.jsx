import React from "react";
import house from "../img/house.png";

function LocationName({ name, message, closed }) {
  return (
    <div className="flex items-center justify-center relative h-[300px] xl:h-[500px] ">
      <div className="absolute px-14 text-center text-4xl leading-none text-white z-10 xl:text-[50px]">
        <p>{name}</p>
        {message ? <p className="opacity-50 text-sm">{message}</p> : null}
      </div>

      {closed ? (
        <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light py-[73px] px-14 leading-[1.15] "></div>
      ) : (
        <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.80] py-[73px] px-14 leading-[1.15] "></div>
      )}
      <img src={house} className="w-full h-full object-cover rounded-[15px]" />
    </div>
  );
}

export default LocationName;
