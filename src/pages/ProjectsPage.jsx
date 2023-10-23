import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Card from "../components/card/Card";
import bedroom from "../img/bedroom.png";
import PageBanner from "../components/PageBanner";
import axios from "axios";

function ProjectsPage() {
  const [properties, setProperties] = useState("");

  const [filters, setFilters] = useState({
    location: "",
    sale: "",
    status: "",
    type: "",
  });

  const [filteredProperties, setFilteredProperties] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/property")
      .then((res) => res.data.properties)
      .then((data) => setProperties(data));
  }, []);

  const handleSelectChange = (event, filterType) => {
    console.log("handling change...");
    const value = event.target.value;
    console.log("value", value);
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  useEffect(() => {
    const filteredProperties = handleFilter(filters);
    setFilteredProperties(filteredProperties);
  }, [filters]);

  const handleFilter = () => {
    const { location, sale, status, type } = filters;
    let result = properties;

    if (location) {
      result = result.filter((property) => property.mapLocation === location);
    }

    if (sale) {
      result = result.filter((property) => property.sellingStatus === sale);
    }

    if (status) {
      result = result.filter((property) => property.buildingStatus === status);
    }

    if (type) {
      result = result.filter((property) => property.type === type);
    }

    if (!type && !location && !status && !sale) {
      result = properties;
    }

    return result;
  };

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
            <div className="container flex flex-col  gap-2 justify-between mx-auto md:grid md:grid-cols-2 md:gap-2 xl:gap-4 xl:text-base">
              {/* Location */}
              <select
                onChange={(e) => handleSelectChange(e, "location")}
                className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 "
              >
                <option value="">Location (any)</option>
                <option value="Jackros">Jackros</option>
                <option value="Bulbula">Bulbula</option>
                <option value="Mekanisa">Mekanisa</option>
                <option value="Welo Sefer">Welo Sefer</option>
              </select>

              {/* Property Status (any) */}
              <select
                onChange={(e) => handleSelectChange(e, "status")}
                className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 "
              >
                <option value="">Property Status (any)</option>
                <option value="Finished">Finished</option>
                <option value="Semi Finished">Semi Finished</option>
              </select>

              {/* Keyword */}
              <select
                onChange={(e) => handleSelectChange(e, "sale")}
                className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 "
              >
                <option value="">Sale (any)</option>
                <option value="Sold out">Sold out</option>
                <option value="On sale">On sale</option>
                <option value="Discount">Discount</option>
              </select>

              {/* Property Type*/}
              <select
                onChange={(e) => handleSelectChange(e, "type")}
                className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 "
              >
                <option value="">Property Type (any)</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
              </select>
            </div>
          </div>
        }
      />

      <section>
        <div className="container mx-auto px-4 flex flex-col items-center justify-between mt-6 md:px-24 md:flex-row">
          <h2 className="flex gap-x-2 capitalize md:text-3xl">
            <p>
              {filteredProperties
                ? filteredProperties.length
                : properties.length}
            </p>
            Properties Found
          </h2>
          <select
            style={{ boxShadow: "0px 0px 11px 1px #00000040" }}
            className="w-60 mb-7 p-3 xl:p-5 rounded-[15px] font-medium outline-none md:w-44 xl:text-base"
          >
            <option value="">Sort by Price</option>
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>

        {/* Search Result */}
        <div className="container mx-auto px-4  flex flex-col  gap-8 items-center md:px-20 xl:grid xl:grid-cols-2 xl:place-items-center">
          {filteredProperties
            ? filteredProperties.map((item) => (
                <Card key={item._id} item={item} />
              ))
            : properties &&
              properties.map((item) => <Card key={item._id} item={item} />)}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
