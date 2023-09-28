import React from "react";
import Card from "../components/card/Card";

function HomePage() {
  return (
    <>
      <h1 className="text-[80px] text-center mx-auto capitalize">
        Opening doors, <br /> building communities!
      </h1>
      <section id="slider">
        <Card />
      </section>
    </>
  );
}

export default HomePage;
