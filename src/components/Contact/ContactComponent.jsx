import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactComponent() {
  return (
    <div className="container grid grid-cols-2 gap-28 mb-14 mx-auto">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default ContactComponent;
