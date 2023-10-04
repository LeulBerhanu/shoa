import React from "react";
import house from "../img/house.png";
import ContactComponent from "../components/Contact/ContactComponent";
import MapComponent from "../components/MapComponent";
import PageBanner from "../components/PageBanner";

function ContactUsPage() {
  return (
    <div className="px-20">
      <PageBanner name="Contact Us" />

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
