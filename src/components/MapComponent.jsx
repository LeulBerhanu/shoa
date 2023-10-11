import React from "react";

function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8088109912273!2d38.78359037591689!3d8.989733389600504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fb99570403%3A0x8a21e3ebfc8b4fc5!2zRnJpZW5kc2hpcCBCdXNpbmVzcyBDZW50ZXIgKOGNjeGIrOGKleGLteGIuuGNlSDhi6jhjIjhiaDhi6sg4Yib4Yql4Yqo4YiNKQ!5e0!3m2!1sen!2set!4v1696106308092!5m2!1sen!2set"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
      className="w-full h-full rounded-[15px]"
      style={{ boxShadow: "0px 0px 6px 0px #00000040" }}
    ></iframe>
  );
}

export default MapComponent;
