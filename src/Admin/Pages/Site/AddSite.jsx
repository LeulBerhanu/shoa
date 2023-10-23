import React, { useEffect, useState } from "react";
import axios from "axios";
import UploadImage from "../../Components/UploadImage";

// {
//   "_id": {
//     "$oid": "65317dcc6acaad5c4d1c3a1c"
//   },
//   "title": "Welo Sefer",
//   "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8088109912273!2d38.78359037591689!3d8.989733389600504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fb99570403%3A0x8a21e3ebfc8b4fc5!2zRnJpZW5kc2hpcCBCdXNpbmVzcyBDZW50ZXIgKOGNjeGIrOGKleGLteGIuuGNlSDhi6jhjIjhiaDhi6sg4Yib4Yql4Yqo4YiNKQ!5e0!3m2!1sen!2set!4v1696106308092!5m2!1sen!2set"
// }

function AddSite() {
  const [image, setImage] = useState({});
  const [data, setData] = useState({
    title: "",
    location: "",
    remark: "",
    closed: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/site",
        { ...data, image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }

    setImage({});
    setData({ title: "", location: "", remark: "", closed: false });
  }

  return (
    <div className="px-10">
      <h2 className="font-bold">Add Site</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-9 bg-white rounded-lg p-10">
          {/* Title/Price and Image */}
          <div className="grid grid-cols-2  gap-x-12">
            {/* Title and Price */}
            <div className="flex flex-col gap-y-9  w-full">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-2xl mb-6">
                  Name
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  value={data.title}
                  onChange={(e) =>
                    setData((prevData) => ({
                      ...prevData,
                      title: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="readTime" className="text-2xl mb-6">
                  Map Location
                </label>
                <input
                  required
                  id="readTime"
                  type="text"
                  placeholder="Enter location name"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  value={data.location}
                  onChange={(e) =>
                    setData((prevData) => ({
                      ...prevData,
                      location: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="readTime" className="text-2xl mb-6">
                  Remark
                </label>
                <input
                  id="readTime"
                  type="text"
                  placeholder="Enter remark"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  value={data.remark}
                  onChange={(e) =>
                    setData((prevData) => ({
                      ...prevData,
                      remark: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col  w-full">
                <label htmlFor="price" className="text-2xl mb-6">
                  Image
                </label>
                <div className="bg-[#D9D9D940]/25 p-1 border">
                  <UploadImage image={image} setImage={setImage} />
                </div>
                {/* <input
                id="price"
                type="file"
                placeholder="Enter price"
                className="h-full p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
              /> */}
              </div>
              <div>
                {/* { ? <p>image uploaded</p> : null} */}
                {/* <img src={image} alt="" className="w-7 h-7" /> */}
              </div>
            </div>
          </div>

          <button type="submit" className="primaryBtn self-end w-[148px]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSite;
