import React from "react";
import Card from "../components/card/Card";
import Hero from "../components/Hero";
import SmallCard from "../components/card/SmallCard";
// Icons
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const h2Style = "text-[39px] text-center m-8 capitalize";

function HomePage() {
  return (
    <>
      <h1 className="text-[80px] text-center capitalize mb-24">
        Opening doors, <br /> building communities!
      </h1>

      <section id="slider_section">
        <Card />
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
        <div className="flex text-4xl justify-center">
          <div className="flex flex-col gap-16 p-11 max-w-[480px] border">
            <a href="#">Housing prices in Addis Ababa is changing</a>
            <i className="self-end ">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="flex flex-col gap-16 p-11 max-w-[480px] border">
            <a href="#">
              Is the current inflation affecting real estate owners
            </a>
            <i className="self-end ">
              <HiOutlineArrowUpRight />
            </i>
          </div>

          <div className="flex flex-col gap-16 p-11 max-w-[480px] border">
            <a href="#">What’s new at shoa real estate listings</a>
            <i className="w-8 self-end align-baseline">
              <HiOutlineArrowUpRight />
            </i>
          </div>
        </div>
      </section>

      <section id="location_section">
        <h2 className={h2Style}>Location</h2>
        {/* <LocationMap /> */}
      </section>
    </>
  );
}

export default HomePage;
