import React from "react";

function Filters() {
  return (
    <div className="container flex flex-col  gap-2 justify-between mx-auto md:grid md:grid-cols-2 md:gap-2 xl:gap-4 xl:text-base">
      {/* Location */}
      <select className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 ">
        <option value="">Location (any)</option>
        <option value="">Jackros</option>
        <option value="">Bulbula</option>
        <option value="">Mekanisa</option>
        <option value="">Welo Sefer</option>
      </select>

      {/* Property Status (any) */}
      <select className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 ">
        <option value="">Property Status (any)</option>
        <option value="">Finished</option>
        <option value="">Semi Finished</option>
      </select>

      {/* Keyword */}
      <select className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 ">
        <option value="">Sale (any)</option>
        <option value="">Sold out</option>
        <option value="">On sale</option>
        <option value="">Discount</option>
      </select>

      {/* Property Type*/}
      <select className="w-full p-3 rounded-[15px] font-medium outline-none xl:p-5 ">
        <option value="">Property Type (any)</option>
        <option value="">Apartment</option>
        <option value="">Villa</option>
      </select>
    </div>
  );
}

export default Filters;
