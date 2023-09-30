import React from "react";
import SearchBar from "../components/SearchBar";
import bedroom from "../img/bedroom.png";
import Filters from "../components/Filters";

function ProjectsPage() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bedroom})` }}
        className="-z-10 w-full h-[500px] fixed top-0 bg-cover bg-no-repeat "
      >
        {/* Gradient Overlay */}
        <div className="absolute w-full h-full  mix-blend-multiply bg-gradient-to-t from-primary_light/[.8] to-white/[.8]"></div>
      </div>
      <div className="flex flex-col gap-5">
        <SearchBar />
        <Filters />
      </div>

      {/* <div className="-z-10">project</div>
        <div className="self-end z-10">
        </div>
      <div className=" flex w-full h-[400px] bg-red-500 absolute top-0 ">
      </div> */}
    </div>
  );
}

export default ProjectsPage;
