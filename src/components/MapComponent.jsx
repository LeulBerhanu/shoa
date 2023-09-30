import React from "react";

function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.581769361606!2d38.794366009774045!3d9.023281263300078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8565d4a30387%3A0x1cf0bebcc87aa5b2!2sShola%20Market%20%7C%20Megenagna!5e0!3m2!1sen!2sus!4v1696060329597!5m2!1sen!2sus"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  );
}

export default MapComponent;
