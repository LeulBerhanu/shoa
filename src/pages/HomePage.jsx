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
import PageBanner from "../components/PageBanner";

const h2Style = " text-center capitalize xl:text-4xl";

function HomePage() {
  return (
    <>
      <h1 className="text-[40px] text-center capitalize mb-24 xl:text-[80px]">
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
        <div className=" flex flex-col gap-11 justify-center items-center xl:flex-row ">
          <SmallCard />
          <SmallCard />
        </div>
      </section>

      <section id="blog_section">
        <h2 className={h2Style}>Blog</h2>
        <div className="container mx-auto grid grid-cols-2 auto-rows-fr text-2xl  xl:flex xl:flex-row xl:text-4xl xl:h-[323px] xl:items-stretch">
          <div className="relative p-11 border">
            <a href="#">Housing prices in Addis Ababa is changing</a>
            <i className="absolute bottom-5 right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="relative p-11 border">
            <a href="#">
              Is the current inflation affecting real estate owners
            </a>
            <i className="absolute bottom-5 right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="relative p-11 border">
            <a href="#">What’s new at shoa real estate listings</a>
            <i className="absolute bottom-5 right-5">
              <HiOutlineArrowUpRight />
            </i>
          </div>
        </div>
      </section>

      <section>
        <h2 className={h2Style}>Our sites</h2>
        <div className="flex flex-col gap-14 px-20">
          <div className="container  flex flex-col  mx-auto relative">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Jackros
            </p>

            <div className="hidden ml-32 xl:w-[527px] xl:block">
              <PageBanner name="Jackros" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20 xl:mr-32 xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Bulbula
            </p>

            <div className="hidden mr-28  xl:w-[527px] xl:block">
              <PageBanner name="Bulbula" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20 xl:mr-32 xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Mekanisa
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <PageBanner name="Mekanisa" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20 xl:mr-32 xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary/[.50] xl:hidden">
              Welo Sefer <span className="opacity-50">(Coming Soon)</span>
            </p>

            <div className="hidden mr-28  xl:w-[527px] xl:block">
              <PageBanner name="Welo Sefer" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20 xl:mr-32 xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>

      <section id="location_section">
        <h2 className={h2Style}>Office Location</h2>

        {/* <LocationMap /> */}
        <div className=" container px-20  h-[450px] mx-auto xl:w-[994px]">
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
