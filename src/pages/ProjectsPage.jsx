import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Card from "../components/card/Card";
import bedroom from "../img/bedroom.png";

function ProjectsPage() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bedroom})` }}
        className="-z-10 w-full h-[500px] absolute top-0 bg-cover bg-no-repeat "
      >
        {/* Gradient Overlay */}
        {/* <div className="absolute w-full h-full  mix-blend-multiply bg-gradient-to-t from-primary_light/[.8] to-white/[.8]"></div> */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) -61.6%, rgba(14, 52, 75, 0.8) 100%)",
          }}
          className="absolute w-full h-full"
        ></div>

        {/* Badge */}
        {/* <div></div> */}
      </div>

      <div className="container mx-auto flex flex-col gap-5 px-36">
        <SearchBar />
        <Filters />
      </div>

      <section>
        <div className="container mx-auto px-24 flex items-center justify-between mt-40">
          <h2 className="capitalize">4 Properties Found</h2>
          <select
            style={{ boxShadow: "0px 0px 11px 1px #00000040" }}
            className="w-44 p-5 rounded-[15px] font-medium "
          >
            <option value="">Sort By (any)</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </div>

        {/* Search Result */}
        <div className="container mx-auto px-24 flex flex-col gap-8 mb-[60px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
