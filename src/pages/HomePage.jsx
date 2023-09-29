import React from "react";
import Card from "../components/card/Card";
import Hero from "../components/Hero";

const h2Style = "text-[39px] text-center m-8";

function HomePage() {
  return (
    <>
      <h1 className="text-[80px] text-center capitalize">
        Opening doors, <br /> building communities!
      </h1>
      <section id="slider">
        <Card />
      </section>
      <h2 className={h2Style}>Why chose shoa Homes?</h2>
      <Hero />
    </>
  );
}

export default HomePage;
