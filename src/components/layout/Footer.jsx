import React, { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import copyright from "../../img/ph_copyright-thin.svg";

import CurrencyConvertor from "../CurrencyConvertor";

function Footer() {
  return (
    <footer className="bg-primary flex-shrink-0 mt-24">
      <div className=" container flex flex-col md:grid md:grid-cols-2  text-white mx-auto">
        {/* Left Column */}
        <div className=" flex flex-col gap-8 px-11 py-12 border-r">
          {/* Contact */}
          <div className="flex justify-between">
            <div className="capitalize tracking-wide font-bold text-[22px] xl:text-[28px]">
              {/* Phone */}
              <p>+251 912121212</p>
              {/* location */}
              <div className="text-white mt-9 opacity-50 ">
                <p>Megenagna,</p>
                <p>addis ababa, ethiopia</p>
              </div>
            </div>

            {/* Contact Button */}
            <div>
              <button className="hidden bg-white shadow-sm capitalize text-primary_light rounded-[10px] font-medium py-2 px-3 md:block xl:py-4 xl:px-6  xl:text-2xl">
                let's talk
              </button>
            </div>
          </div>

          {/* Arrow Button */}
          <button className="hidden text-[40px] self-end md:block">
            <HiOutlineArrowUp />
          </button>

          {/* Paragraph Content */}
          <p className="text-base max-w-[500px] xl:text-xl">
            If you're ready to find your perfect retreat, our real estate
            landing page is the perfect place to start. Browse our listings and
            discover homes that seamlessly blend natural design with modern
            technology. Interested in learning more? Discuss your options with
            one of our agents today.
          </p>

          <button className=" bg-white shadow-sm capitalize text-primary_light rounded-[10px] font-medium py-2 px-3  md:hidden xl:py-4 xl:px-6  text-2xl">
            let's talk
          </button>

          <div className="justify-self-end text-xl  md:hidden ">
            <div className="bg-[#C3CCD2] p-10 rounded-md">
              <p className="mb-5 text-center">Currency Converter</p>
              <CurrencyConvertor />
            </div>
          </div>

          {/* Footer's footer */}
          <div className="flex flex-col-reverse gap-y-4 justify-between items-start md:flex-row">
            <i className="flex items-center gap-2 not-italic">
              <img src={copyright} className="w-5" alt="copyright" />
              <p className="text-sm xl:text-xl">All rights reserved</p>
            </i>
            {/* Icons */}
            <div className="flex text-2xl gap-x-2 xl:text-5xl xl:gap-x-3">
              <AiFillInstagram />
              <AiFillFacebook />
              <FaLinkedinIn />
              <RiTwitterXFill />
            </div>
          </div>
        </div>

        {/* *** Right Column *** */}
        <div className="hidden md:block justify-self-center self-center px-11 py-12 ">
          <div className="bg-[#C3CCD2] p-10 rounded-md">
            <p className="mb-8 text-center text-3xl">Currency Converter</p>

            <CurrencyConvertor />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
