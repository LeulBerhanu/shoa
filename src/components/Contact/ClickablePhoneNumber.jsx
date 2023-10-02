import React from "react";

const ClickablePhoneNumber = ({ phoneNumber }) => {
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert("Phone number copied!");
  };

  return (
    <p className="hover:underline cursor-pointer" onClick={copyPhoneNumber}>
      {phoneNumber}
    </p>
  );
};

export default ClickablePhoneNumber;
