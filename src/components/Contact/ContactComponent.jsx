import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactComponent() {
  return (
    <div className="container flex flex-col gap-9 mb-14 mx-auto md:gap-y-28 lg:grid grid-cols-2">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default ContactComponent;
