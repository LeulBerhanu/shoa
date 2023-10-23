import axios from "axios";
import React, { useEffect, useState } from "react";

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

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    try {
      const res = await axios.post("http://localhost:4000/api/contact", data);

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex flex-col gap-y-2 font-medium md:gap-y-6 md:text-2xl"
    >
      <div className={inputContainerStyles}>
        <label htmlFor="name" className={labelStyles}>
          Name
        </label>
        <input
          required
          id="name"
          type="text"
          className={inputStyles}
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className={inputContainerStyles}>
        <label htmlFor="email" className={labelStyles}>
          Email
        </label>
        <input
          required
          id="email"
          type="email"
          className={inputStyles}
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div className={inputContainerStyles}>
        <label htmlFor="subject" className={labelStyles}>
          Subject
        </label>
        <input
          required
          id="subject"
          type="subject"
          className={inputStyles}
          value={data.subject}
          onChange={(e) =>
            setData((prev) => ({ ...prev, subject: e.target.value }))
          }
        />
      </div>

      <div className={inputContainerStyles}>
        <label htmlFor="textarea" className="text-white cursor-pointer">
          Message
        </label>
        <textarea
          required
          name="textarea"
          id="textarea"
          style={{ width: "100%", minHeight: "100px", maxHeight: "300px" }}
          cols="50"
          rows="4"
          className="bg-transparent ml-5 outline-none"
          value={data.message}
          onChange={(e) =>
            setData((prev) => ({ ...prev, message: e.target.value }))
          }
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
