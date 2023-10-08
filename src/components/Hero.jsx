import React from "react";
import house from "../img/house.png";
// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { PiMapPinLineBold } from "react-icons/pi";
import { BsCash } from "react-icons/bs";
import handCash from "../img/iconoir_hand-cash.svg";
import locationPin from "../img/mingcute_location-2-line.svg";

function Hero() {
  const bgImage = {
    backgroundImage: `url(${house})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={bgImage} className="flex justify-center text-white relative ">
        <div className="z-10 p-10 md:p-20">
          <p className="container mx-auto text-sm text-justify md:text-xl xl:text-2xl">
            We do all we can to have the best home we could possibly have to the
            best of our convenience. In Addis Ababa, this has been a major
            challenge even with a number of real estate developers.
          </p>
          {/* Icons */}
          <div className="container mx-auto flex flex-col place-content-around gap-y-10  capitalize p-8 md:flex-row md:text-2xl xl:text-4xl ">
            <div className="flex flex-col items-center">
              <i className="text-6xl md:text-[70px] xl:text-[100px]">
                <FaRegCheckCircle />
              </i>
              <p>Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <i className=" w-[70px] md:w-[75px] xl:w-[100px]">
                <img src={locationPin} alt="" />
              </i>
              <p>convenience</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="w-[70px] md:w-[75px] xl:w-[100px]">
                <img src={handCash} alt="" />
              </i>
              <p>Affordable</p>
            </div>
          </div>
        </div>
        {/* Color Overlay */}
        <div className="absolute w-full h-full  mix-blend-multiply bg-primary_light/[.85]  "></div>
      </div>
    </>
  );
}

export default Hero;
