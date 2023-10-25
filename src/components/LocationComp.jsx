import React from "react";

function LocationComp({ url }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5508228710714!2d38.76698627591676!3d9.013412289230882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8577ec63a69b%3A0x6aa861c4747ca727!2sMetro%20Building%20Materials%20Supplier!5e0!3m2!1sen!2set!4v1698190926163!5m2!1sen!2set"
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
