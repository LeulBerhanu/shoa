import React from "react";
import house from "../img/house.png";

function ProjectDetailsPage() {
  return (
    <div>
      <div className="container mx-auto w-[1278px] h-[619px] mb-[40px]">
        <img
          src={house}
          alt=""
          className="w-full h-full object-cover rounded-[15px]"
        />
        <p className="mt-4 text-[#4A6778]">
          Home\Projects\Semi finished\Bole bulbula apt
        </p>
      </div>

      <h1 className="text-[49px]">Bole Bulbula Site, Two bedroom</h1>
      <p className="text-[28px] text-[#4A6778]">$97,000/sqm</p>
    </div>
  );
}

export default ProjectDetailsPage;
