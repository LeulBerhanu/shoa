import React from "react";
// Icons
import { IoMdMail } from "react-icons/io";
import phone from "../../img/phone_icon.svg";
import Ellipse1 from "../../img/ellipse/Ellipse 2.svg";
import Ellipse2 from "../../img/ellipse/Ellipse 3.svg";

function ContactInfo() {
  return (
    <div className="relative md:text-xl bg-primary_light text-white rounded-[5px] py-14 px-8">
      <h2 className="mt-0 text-xl">Contact Information</h2>
      <address>
        {/* Email */}
        <div className="flex">
          <i className="text-3xl">
            <IoMdMail />
          </i>
          <a href="#" className="ml-5 self-end">
            info@shoahomes.com
          </a>
        </div>

        {/* Phone number */}
        <div className="flex mt-8">
          <img src={phone} alt="Phone icon" className="self-start" />
          <div className="ml-3">
            <p>+251995191919</p>
            <p>+251992494949</p>
            <p>+251115589897</p>
          </div>
        </div>
      </address>

      <h2 className="text-xl">Working Hours</h2>
      <ul>
        <li className="list-disc ml-8">
          <p>Mon - Fri: 8 am to 6 pm</p>
        </li>
        <li className="list-disc ml-8">
          <p>Sat - Sun: 8 am to 6 pm </p>
        </li>
      </ul>

      {/* Ellipse */}
      <div>
        <img
          src={Ellipse1}
          className="absolute bottom-0 right-0 opacity-25 md:opacity-100"
        />
        <img
          src={Ellipse2}
          className="absolute bottom-0 right-0 opacity-25 md:opacity-100"
        />
      </div>
    </div>
  );
}

export default ContactInfo;
