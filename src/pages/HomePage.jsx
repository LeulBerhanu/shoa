import React from "react";
import Card from "../components/card/Card";
import Hero from "../components/Hero";
import SmallCard from "../components/card/SmallCard";
import MapComponent from "../components/MapComponent";
import SwiperComponent from "../components/SwiperComponent";
import ContactComponent from "../components/Contact/ContactComponent";
import ImageCarousel from "../components/Image Carousel/ImageCarousel";
import Carousel from "../components/Image Carousel/Carousel";
// Icons
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const h2Style = " text-center capitalize";

function HomePage() {
  return (
    <>
      <h1 className="text-[80px] text-center capitalize mb-24">
        Opening doors, <br /> building communities!
      </h1>

      <section id="slider_section">
        <div className="container mx-auto h-[600px] ">
          <SwiperComponent />
        </div>
      </section>

      <h2 className={h2Style}>Why choose shoa Homes?</h2>
      <Hero />

      <section id="featured_properties_section">
        <h2 className={h2Style}>Featured properties</h2>
        <div className=" flex gap-x-11 justify-center">
          <SmallCard />
          <SmallCard />
        </div>
      </section>

      <section id="blog_section">
        <h2 className={h2Style}>Blog</h2>
        <div className="flex text-4xl justify-center h-[323px]">
          <div className="relative p-11 max-w-[480px] border">
            <a href="#">Housing prices in Addis Ababa is changing</a>
            <i className="absolute bottom-5 right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="relative p-11 max-w-[480px] border">
            <a href="#">
              Is the current inflation affecting real estate owners
            </a>
            <i className="absolute bottom-5 right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="relative p-11 max-w-[480px] border">
            <a href="#">What’s new at shoa real estate listings</a>
            <i className="absolute bottom-5 right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>
        </div>
      </section>

      <section id="location_section">
        <h2 className={h2Style}>Location</h2>

        {/* <LocationMap /> */}
        <div className=" container w-[994px]  h-[450px] mx-auto">
          <MapComponent />
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="px-20">
          <h2 className={h2Style}>Contact us</h2>
          <ContactComponent />
        </div>
      </section>
    </>
  );
}

export default HomePage;
