import React from "react";

function LocationComp({ url }) {
  return (
    <iframe
      src={url}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
      className="w-full h-full rounded-[15px]"
      style={{ boxShadow: "0px 0px 6px 0px #00000040" }}
    ></iframe>
  );
}

export default LocationComp;
