import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import copyright from "../../img/ph_copyright-thin.svg";

function Footer() {
  return (
    <footer className="bg-primary flex-shrink-0">
      <div className=" container grid grid-cols-2  text-white mx-auto">
        {/* Left Column */}
        <div className=" flex flex-col gap-8 px-11 py-12 border-r">
          {/* Contact */}
          <div className="flex justify-between">
            <div className="capitalize text-[28px] tracking-wide font-bold text">
              {/* Phone */}
              <p>+251 912121212</p>
              {/* location */}
              <div className="text-white opacity-50 ">
                <p>Megenagna,</p>
                <p>addis ababa, ethiopia</p>
              </div>
            </div>

            {/* Contact Button */}
            <div>
              <button className="bg-white shadow-sm capitalize text-primary_light text-2xl font-medium py-4 px-6 rounded-[10px] ">
                let's talk
              </button>
            </div>
          </div>

          {/* Arrow Button */}
          <button className="text-[40px] self-end">
            <HiOutlineArrowUp />
          </button>

          {/* Paragraph Content */}
          <p className="text-xl max-w-[500px]">
            If you're ready to find your perfect retreat, our real estate
            landing page is the perfect place to start. Browse our listings and
            discover homes that seamlessly blend natural design with modern
            technology. Interested in learning more? Discuss your options with
            one of our agents today.
          </p>

          {/* Footer's footer */}
          <div className="flex justify-between items-end">
            <i className="flex items-center gap-2 not-italic">
              <img src={copyright} alt="copyright" />
              <p className="text-xl">All rights reserved</p>
            </i>
            {/* Icons */}
            <div className="flex text-5xl gap-x-3">
              <AiFillInstagram />
              <AiFillFacebook />
              <FaLinkedinIn />
              <RiTwitterXFill />
            </div>
          </div>
        </div>

        {/* *** Right Column *** */}
        <div className="justify-self-end px-11 py-12">
          <p>currency converter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
