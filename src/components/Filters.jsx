import React from "react";

function Filters() {
  return (
    <div className="container flex flex-col text-xs gap-4 justify-between mx-auto md:grid md:grid-cols-2 md:gap-2 xl:flex xl:text-base">
      {/* Location */}
      <select className="w-full p-3 rounded-[15px] font-medium xl:p-5 ">
        <option value="">Location (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>

      {/* Property Status (any) */}
      <select className="w-full p-3 rounded-[15px] font-medium xl:p-5 ">
        <option value="">Property Status (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>

      {/* Keyword */}
      <select className="w-full p-3 rounded-[15px] font-medium xl:p-5 ">
        <option value="">Keyword (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>

      {/* Property Type*/}
      <select className="w-full p-3 rounded-[15px] font-medium xl:p-5 ">
        <option value="">Property Type (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>
    </div>
  );
}

export default Filters;
