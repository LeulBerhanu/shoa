import React from "react";
import house from "../img/house.png";

function PageBanner({ name, content, footer, center, rounded }) {
  const bgImage = {
    backgroundImage: `url(${house})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      style={bgImage}
      className={`flex items-center relative border ${
        rounded ? "rounded-[15px]" : ""
      }`}
    >
      <div className="container px-5 mx-auto z-10 relative md:px-20">
        {name && (
          <p
            className={`${
              center ? "text-center" : "text-left"
            } py-14 text-xl leading-none text-white  xl:text-4xl`}
          >
            {name}
          </p>
        )}
        {/* <img src={house} className="w-full h-full object-cover rounded-[15px]" /> */}

        {/* Content */}
        {content && <div className="py-5">{content}</div>}

        {/* footer */}
        {footer && (
          <p className="absolute bottom-0 right-5 py-4 text-white text-[10px] md:text-xs md:right-20 xl:text-base">
            {footer}
          </p>
        )}
      </div>
      <div
        className={` absolute w-full h-full bg-primary_light/[.50] ${
          rounded ? "rounded-[15px]" : ""
        }`}
      ></div>
    </div>
  );
}

export default PageBanner;
