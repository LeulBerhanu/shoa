import React from "react";

function DropdownFilter({ options, selectedOption, onOptionChange }) {
  return (
    <select value={selectedOption} onChange={onOptionChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default DropdownFilter;
