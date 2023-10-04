import React from "react";

function Filters() {
  return (
    <div className="container flex gap-7 justify-between mx-auto ">
      {/* Location */}
      <select className="w-full p-5 rounded-[15px] font-medium ">
        <option value="">Location (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>

      {/* Property Status (any) */}
      <select className="w-full p-5 rounded-[15px] font-medium ">
        <option value="">Property Status (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>

      {/* Keyword */}
      <select className="w-full p-5 rounded-[15px] font-medium ">
        <option value="">Keyword (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>

      {/* Property Type*/}
      <select className="w-full p-5 rounded-[15px] font-medium ">
        <option value="">Property Type (any)</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>
    </div>
  );
}

export default Filters;