import React, { useState } from "react";

const inputContainerStyles =
  "flex bg-[#C3CCD2]/[.5] py-2 px-3 rounded md:py-4 md:px-5 ";
const inputStyles = "bg-transparent outline-none ml-2 md:ml-4 w-full ";
const labelStyles = "text-white cursor-pointer";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <form className="container flex flex-col gap-y-2 font-medium md:gap-y-6 md:text-2xl">
      <div className={inputContainerStyles}>
        <label htmlFor="name" className={labelStyles}>
          Name
        </label>
        <input id="name" type="text" className={inputStyles} />
      </div>

      <div className={inputContainerStyles}>
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <input id="email" type="email" className={inputStyles} />
      </div>

      <div className={inputContainerStyles}>
        <label htmlFor="subject" className={labelStyles}>
          Subject
        </label>
        <input id="subject" type="subject" className={inputStyles} />
      </div>

      <div className={inputContainerStyles}>
        <label htmlFor="textarea" className="text-white cursor-pointer">
          Message
        </label>
        <textarea
          name="textarea"
          id="textarea"
          style={{ width: "100%", minHeight: "100px", maxHeight: "300px" }}
          cols="50"
          rows="4"
          className="bg-transparent ml-5 outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className=" bg-primary_light text-white p-4 rounded-[5px] md:text-2xl"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
