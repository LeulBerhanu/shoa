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
import LocationName from "../components/LocationName";

const h2Style = " text-center capitalize text-xl md:text-2xl xl:text-4xl";

function HomePage() {
  return (
    <>
      <h1 className="text-2xl text-center capitalize md:text-[40px] xl:text-[80px]">
        Opening doors, <br /> building communities!
      </h1>

      <section id="slider_section">
        <div className="h-[620px] md:hidden ">
          <SwiperComponent slides="1" />
        </div>
        <div className="hidden h-[270px] md:block xl:h-[470px] ">
          <SwiperComponent slides="2" />
        </div>
      </section>

      <h2 className={h2Style}>Why choose shoa Homes?</h2>
      <Hero />

      <section id="featured_properties_section">
        <h2 className={h2Style}>Featured properties</h2>
        <div className=" flex flex-col gap-11 justify-center items-center xl:flex-row ">
          <SmallCard onSaleBadge />
          <SmallCard discountBadge />
        </div>
      </section>

      <section id="blog_section">
        <h2 className={h2Style}>Blog</h2>
        <div className="container mx-auto flex flex-col  text-sm md:text-2xl md:grid md:grid-cols-2 auto-rows-fr xl:flex xl:flex-row xl:text-4xl xl:h-[323px] xl:items-stretch">
          <div className="relative border p-5 md:p-11">
            <a href="#">Housing prices in Addis Ababa is changing</a>
            <i className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="relative border p-5 md:p-11">
            <a href="#">
              Is the current inflation affecting real estate owners
            </a>
            <i className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="relative border p-5 md:p-11">
            <a href="#">What’s new at shoa real estate listings</a>
            <i className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>
        </div>
      </section>

      <section>
        <h2 className={h2Style}>Our sites</h2>
        <div className="flex flex-col gap-14 px-4 md:px-20">
          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Jackros
            </p>

            <div className="hidden xl:w-[527px] xl:block ">
              <LocationName name="Jackros" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20 xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row-reverse xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Bulbula
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <LocationName name="Bulbula" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20  xl:left-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Mekanisa
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <LocationName name="Mekanisa" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20  xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row-reverse xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Welo Sefer <span className="opacity-50">(Coming Soon)</span>
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <LocationName name="Wolo Sefer" message="(Coming Soon)" closed />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20  xl:left-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="px-4 md:px-20">
          <h2 className={h2Style}>Contact us</h2>
          <ContactComponent />
        </div>
      </section>

      {/* Office Location */}
      <section id="location_section">
        <h2 className={h2Style}>Office Location</h2>

        {/* <LocationMap /> */}
        <div className=" container px-4 h-[250px]  mx-auto md:px-20 md:h-[450px] xl:w-[994px]">
          <MapComponent />
        </div>
      </section>
    </>
  );
}

export default HomePage;
