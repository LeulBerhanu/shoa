import React from "react";
import ppic from "../../img/ppic.jpg";
// icons
import { PiPhone } from "react-icons/pi";
import phoneSvg from "../../img/phoneSvg.svg";
import locationpin from "../../img/locationpin.svg";
// components
import ClickablePhoneNumber from "../Contact/ClickablePhoneNumber";

function CallingCard() {
  return (
    <div className="p-[10px] shadow-boxShadow rounded-[15px]">
      <div className="px-3 pt-9">
        {/* Card Head */}
        <div className="flex items-center gap-x-4">
          <img
            src={ppic}
            alt="agent photo"
            className="w-20 h-20 object-cover rounded-[15px] "
          />
          <div>
            <h2 className="m-0 -mb-2">Henok Tsegaye</h2>
            <p className="text-xl text-[#4A6778]">Agent</p>
          </div>
        </div>

        <address className="flex flex-col text-xl mt-10 gap-4">
          {/* phone 1 */}
          <div className="flex gap-x-2 items-center">
            <i>
              <img src={phoneSvg} alt="phone icon" />
            </i>
            <ClickablePhoneNumber phoneNumber="+251 911561997" />
          </div>

          {/* phone 2 */}
          <div className="flex gap-x-2 items-center">
            <i>
              <img src={phoneSvg} alt="phone icon" />
            </i>
            <ClickablePhoneNumber phoneNumber="+251 911561997" />
          </div>

          {/* location */}
          <div className="flex gap-x-2 items-center ">
            <i>
              <img src={locationpin} alt="location icon" />
            </i>
            <p>Bole, Addis Ababa</p>
          </div>
        </address>
      </div>

      <div className="bg-[#192A36] text-white text-[28px] p-10 text-center rounded-[15px] mt-7">
        <p>Call Us Now and Secure your future home!</p>
      </div>
    </div>
  );
}

export default CallingCard;
