import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Card from "../components/card/Card";
import bedroom from "../img/bedroom.png";
import PageBanner from "../components/PageBanner";
import axios from "axios";

function ProjectsPage() {
  const [properties, setProperties] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/property")
      .then((res) => res.data.properties)
      .then((data) => setProperties(data));
  }, []);

  return (
    <div>
      {/* <div
        style={{ backgroundImage: `url(${bedroom})` }}
        className="-z-10 w-full h-[500px] absolute top-0 bg-cover bg-no-repeat"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) -61.6%, rgba(14, 52, 75, 0.8) 100%)",
          }}
          className="absolute w-full h-full"
        ></div>
      </div> */}

      <PageBanner
        content={
          <div className="flex flex-col gap-5 md:px-10 xl:px-36">
            <SearchBar />
            <Filters />
          </div>
        }
      />

      <section>
        <div className="container mx-auto px-4 flex flex-col items-center justify-between mt-6 md:px-24 md:flex-row">
          <h2 className="capitalize md:text-3xl">4 Properties Found</h2>
          <select
            style={{ boxShadow: "0px 0px 11px 1px #00000040" }}
            className="w-60 mb-7 p-3 xl:p-5 rounded-[15px] font-medium md:w-44 xl:text-base"
          >
            <option value="">Sort By (any)</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </div>

        {/* Search Result */}
        <div className="container mx-auto px-4  flex flex-col  gap-8 items-center md:px-20">
          {properties && properties.map((item) => <Card item={item} />)}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
