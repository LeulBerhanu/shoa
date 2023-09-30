import React from "react";
import SearchBar from "../components/SearchBar";
import bedroom from "../img/bedroom.png";
import Filters from "../components/Filters";
import Card from "../components/card/Card";

function ProjectsPage() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bedroom})` }}
        className="-z-10 w-full h-[500px] absolute top-0 bg-cover bg-no-repeat "
      >
        {/* Gradient Overlay */}
        <div className="absolute w-full h-full  mix-blend-multiply bg-gradient-to-t from-primary_light/[.8] to-white/[.8]"></div>
      </div>

      <div className="flex flex-col gap-5">
        <SearchBar />
        <Filters />
      </div>

      <section>
        <div className="container mx-auto flex items-center justify-between mt-40">
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
        <div className="container mx-auto flex flex-col gap-8 mb-[60px]">
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
