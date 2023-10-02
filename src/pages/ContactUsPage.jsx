import React from "react";
import house from "../img/house.png";
import ContactComponent from "../components/Contact/ContactComponent";
import MapComponent from "../components/MapComponent";

function ContactUsPage() {
  return (
    <div className="px-20">
      <div className="container flex items-center mx-auto relative h-[500px] ">
        <p className="absolute px-14 text-[79px] text-white z-10">Contact Us</p>
        <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] "></div>
        <img
          src={house}
          className="w-full h-full object-cover rounded-[15px]"
        />
      </div>

      <div className="mt-28">
        <ContactComponent />
      </div>

      <div className=" container h-[622px] mx-auto mb-56">
        <MapComponent />
      </div>
    </div>
  );
}

export default ContactUsPage;
