import React from "react";
import house from "../../img/house.png";

function Carousel() {
  return (
    // slide-container
    <div>
      {/* Slide-Content */}
      <div>
        {/* Card-wrapper */}
        <div>
          {/* Card */}
          <div className="rounded-3xl bg-red-800">
            {/* Image-Content */}
            <div>
              {/* overlay span */}
              <span></span>

              {/* card-image */}
              <div className="relative bg-black h-[150px] w-[150px]">
                <img
                  src={house}
                  className="rounded-[50%] h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
