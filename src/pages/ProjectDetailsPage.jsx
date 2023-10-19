import React, { useEffect } from "react";
import house from "../img/house.png";
import floorPlan from "../img/floorPlan.jpg";
import shoaLogo from "../img/shoaLogo.svg";
// icons
import size from "../img/detailPageIcons/size.svg";
import bedIcon from "../img/detailPageIcons/bedIcon.svg";
import location from "../img/detailPageIcons/location.svg";
import apartment from "../img/detailPageIcons/apartment.svg";
import bath from "../img/detailPageIcons/bath.svg";
import saleTag from "../img/detailPageIcons/saleTag.svg";
// components
import MapComponent from "../components/MapComponent";
import OnSaleBadge from "../components/OnSaleBadge";
import CallCard from "../components/card/CallCard";
import LocationComp from "../components/LocationComp";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProjectDetailsPage() {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/property/${id}`)
      // .then((res) => console.log("response", res));
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <div className="container mx-auto px-8 md:px-20">
        <div className="relative">
          <div className="h-[164px] md:h-[419px] xl:h-[619px] mb-[40px]">
            <img
              src={house}
              alt=""
              className="w-full h-full object-cover rounded-[15px]"
            />
          </div>
          <p className="absolute -bottom-7 text-xs md:text-base text-[#4A6778]">
            Home\Projects\Semi finished\Bole bulbula apt
          </p>

          {/* Project Id */}
          <div className="bg-white absolute bottom-3 right-3 text-xs px-3 py-2 md:px-5 md:py-3 rounded-[15px] xl:text-[28px]">
            ID: RP-2015-12
          </div>

          {/* Badge */}
          <div className="absolute top-0 right-6">
            <OnSaleBadge />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8  md:px-20">
        <h1 className=" mb-3 text-[28px] md:text-3xl xl:text-[49px]">
          Bole Bulbula Site, <br /> Two bedroom
        </h1>
        <p className=" md:text-xl xl:text-[28px] text-[#4A6778]">$97,000/sqm</p>
      </div>

      {/* Details box */}
      <div className="container mx-auto px-8 md:px-20">
        <div className="mt-4 flex relative text-white xl:text-[28px] rounded-[15px]">
          <div className="z-10 flex flex-col mx-auto gap-y-10 p-10 md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3">
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
                <img
                  src={location}
                  alt=""
                  className="w-[45px] h-[45px] object-cover"
                />
              </i>
              <p>
                Bole bulbula, <br /> Addis Ababa
              </p>
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
      </div>

      <section>
        <div className="container mx-auto px-8 md:px-20">
          <h2 className="mb-2 md:text-[49px]">Description:</h2>
          <p className="text-sm leading-normal xl:text-[28px] text-justify">
            A two bedroom apartment that consists a wide living and dining area,
            a roomy master bedroom with its master bathroom and a balcony, a
            wide kitchen to bake and cook. The maids’ room can also function as
            a store if you don’t need a maid. The second bedroom is also roomy
            for a child or even an adult and shares the common bathroom.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-8 md:px-20">
          <h2 className="md:text-[49px]">Floor Plans:</h2>
          <div className="flex flex-col gap-9 md:gap-6 md:grid md:grid-cols-2 xl:gap-y-12 xl:gap-x-24">
            <div className="relative">
              <img
                src={floorPlan}
                className="rounded-[15px] shadow-boxShadow-2"
              />
            </div>
            <div className="relative">
              <img
                src={floorPlan}
                className="rounded-[15px] shadow-boxShadow-2"
              />
            </div>
            <div className="relative">
              <img
                src={floorPlan}
                className="rounded-[15px] shadow-boxShadow-2"
              />
            </div>
            <div className="relative">
              <img
                src={floorPlan}
                className="rounded-[15px] shadow-boxShadow-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-8 md:px-20">
          <h2>Location:</h2>
          <div className="flex flex-col  gap-x-11 gap-y-8 xl:flex-row">
            <div className="h-[300px]  xl:h-auto xl:flex-1">
              <LocationComp />
            </div>
            <div className="xl:w-[444px] ">
              <CallCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailsPage;
