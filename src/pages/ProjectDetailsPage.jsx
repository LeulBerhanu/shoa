import React from "react";
import house from "../img/house.png";
import floorPlan from "../img/floorPlan.jpg";
// icons
import size from "../img/detailPageIcons/size.svg";
import bedIcon from "../img/detailPageIcons/bedIcon.svg";
import location from "../img/detailPageIcons/location.svg";
import apartment from "../img/detailPageIcons/apartment.svg";
import bath from "../img/detailPageIcons/bath.svg";
import saleTag from "../img/detailPageIcons/saleTag.svg";
// components
import MapComponent from "../components/MapComponent";
import CallingCard from "../components/card/callingCard";
import OnSaleBadge from "../components/OnSaleBadge";

function ProjectDetailsPage() {
  return (
    <div>
      <div className="container mx-auto relative">
        <div className="h-[619px] mb-[40px]">
          <img
            src={house}
            alt=""
            className="w-full h-full object-cover rounded-[15px]"
          />
        </div>
        <p className="absolute -bottom-7 text-[#4A6778]">
          Home\Projects\Semi finished\Bole bulbula apt
        </p>

        {/* Project Id */}
        <div className="bg-white absolute bottom-3 right-3 text-[28px] px-5 py-3 rounded-[15px]">
          ID: RP-2015-12
        </div>

        {/* Badge */}
        <div className="absolute top-0 right-6">
          <OnSaleBadge />
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-[49px]">Bole Bulbula Site, Two bedroom</h1>
        <p className="text-[28px] text-[#4A6778]">$97,000/sqm</p>
      </div>

      {/* Details box */}
      <div className="container mx-auto flex relative text-white text-[28px] rounded-[15px]">
        <div className="z-10 grid grid-cols-3 grid-rows-2 gap-y-10 p-10">
          <div className="flex items-center gap-x-5">
            <i>
              <img src={size} alt="" />
            </i>
            <p>125sqm</p>
          </div>
          <div className="flex items-center gap-x-5">
            <i>
              <img src={apartment} alt="" />
            </i>
            <p>Semi Finished</p>
          </div>
          <div className="flex items-center gap-x-5">
            <i>
              <img src={saleTag} alt="" />
            </i>
            <p>For Sale</p>
          </div>
          <div className="flex items-center gap-x-5">
            <i>
              <img src={bedIcon} alt="" />
            </i>
            <p>2 Bedrooms</p>
          </div>
          <div className="flex items-center gap-x-5">
            <i>
              <img src={bath} alt="" />
            </i>
            <p>2 Bathrooms</p>
          </div>
          <div className="flex items-center gap-x-5">
            <i>
              <img src={location} alt="" />
            </i>
            <p>Bole bulbula, Addis Ababa</p>
          </div>
        </div>
        {/* Color-image Overlay */}
        <img
          src={house}
          className="absolute w-full h-full object-cover rounded-[15px]"
          alt=""
        />
        <div className="absolute w-full h-full bg-primary/50 rounded-[15px]"></div>
      </div>

      <section>
        <div className="container mx-auto">
          <h2>Description:</h2>
          <p className="text-[28px] text-justify">
            A two bedroom apartment that consists a wide living and dining area,
            a roomy master bedroom with its master bathroom and a balcony, a
            wide kitchen to bake and cook. The maids’ room can also function as
            a store if you don’t need a maid. The second bedroom is also roomy
            for a child or even an adult and shares the common bathroom.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <h2>Floor Plans:</h2>
          <div className="grid grid-cols-2 gap-x-24 gap-y-12">
            <img
              src={floorPlan}
              className="rounded-[15px] shadow-boxShadow-2"
            />
            <img
              src={floorPlan}
              className="rounded-[15px] shadow-boxShadow-2"
            />
            <img
              src={floorPlan}
              className="rounded-[15px] shadow-boxShadow-2"
            />
            <img
              src={floorPlan}
              className="rounded-[15px] shadow-boxShadow-2"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <h2>Location:</h2>
          <div className="flex gap-x-11">
            <div className="flex-1">
              <MapComponent />
            </div>
            <div className="w-[444px]">
              <CallingCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailsPage;
