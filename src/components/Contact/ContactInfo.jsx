import React from "react";
// Icons
import { IoMdMail } from "react-icons/io";
import phone from "../../img/phone_icon.svg";
import Ellipse1 from "../../img/ellipse/Ellipse 2.svg";
import Ellipse2 from "../../img/ellipse/Ellipse 3.svg";

function ContactInfo() {
  return (
    <div className="relative text-xl bg-primary_light text-white rounded-[5px] py-14 px-8 ">
      <h2 className="mt-0">Contact Information</h2>
      <address>
        {/* Email */}
        <div className="flex">
          <i className="text-3xl">
            <IoMdMail />
          </i>
          <a href="#" className="ml-5 self-end">
            info@shoa.com
          </a>
        </div>

        {/* Phone number */}
        <div className="flex mt-8 ">
          <img src={phone} alt="Phone icon" className="self-start" />
          <div className="ml-3">
            <p>+251-906-500000</p>
            <p>+251-906-500000</p>
          </div>
        </div>
      </address>

      <h2>Working Hours</h2>
      <ul>
        <li className="list-disc ml-8">
          <p>Mon - Fri: 6 am to 8 pm</p>
        </li>
        <li className="list-disc ml-8">
          <p>Sat - Sun: 6 am to 8 pm </p>
        </li>
      </ul>

      {/* Ellipse */}
      <div>
        <img src={Ellipse1} className="absolute bottom-0 right-0" />
        <img src={Ellipse2} className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
}

export default ContactInfo;
