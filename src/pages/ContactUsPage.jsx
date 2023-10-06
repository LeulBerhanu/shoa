import React from "react";
import house from "../img/house.png";
import ContactComponent from "../components/Contact/ContactComponent";
import MapComponent from "../components/MapComponent";
import PageBanner from "../components/PageBanner";

function ContactUsPage() {
  return (
    <div>
      <PageBanner name="Contact Us" />

      <div className="mt-28 px-20">
        <ContactComponent />
      </div>

      <div className=" container h-[300px] mx-auto px-20 xl:h-[622px]">
        <MapComponent />
      </div>
    </div>
  );
}

export default ContactUsPage;
