import React, { useEffect, useState } from "react";
import axios from "axios";
import UploadImage from "../../Components/UploadImage";
import { useNavigate } from "react-router-dom";
import siteValidation from "../../Validation/siteValidation";

function AddSite() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);
  console.log("erroer", errors);

  const [image, setImage] = useState("");
  const [data, setData] = useState({
    title: "",
    location: "",
    remark: "",
    closed: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setDisable(true);

    const errorValidation = siteValidation(data, image);
    setErrors(errorValidation);

    if (Object.keys(errorValidation).length === 0) {
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

        setImage({});
        setData({ title: "", location: "", remark: "", closed: false });

        navigate("/admin/site");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    setDisable(false);
  }

  return (
    <div className="px-10">
      <h2 className="font-bold">Add Site</h2>
      <form>
        <div className="flex flex-col gap-y-9 bg-white rounded-lg p-10">
          {/* Title/Price and Image */}
          <div className="grid grid-cols-2  gap-x-12">
            {/* Title and Price */}
            <div className="flex flex-col gap-y-9  w-full">
              <div className="flex flex-col relative">
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
                {errors?.title ? (
                  <p className="invalidForm">{errors.title}</p>
                ) : null}
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
                {errors?.location ? (
                  <p className="invalidForm">{errors.location}</p>
                ) : null}
              </div>

              <div>
                <div className="flex align-middle gap-x-3">
                  <input
                    type="checkbox"
                    id="checkRemark"
                    className="text-5xl h-9 w-9"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        closed: !prev.closed,
                      }))
                    }
                  />
                  <label htmlFor="checkRemark" className="text-2xl mb-6">
                    Closed
                  </label>
                </div>

                {data?.closed ? (
                  <div className="flex flex-col">
                    <label htmlFor="remark" className="text-2xl mb-6">
                      Remark
                    </label>
                    <input
                      id="remark"
                      type="text"
                      placeholder="Enter remark"
                      className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          remark: e.target.value,
                        }))
                      }
                    />
                  </div>
                ) : null}
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
              </div>
              {errors?.image ? (
                <p className="invalidForm">{errors.image}</p>
              ) : null}
              <div>
                {/* { ? <p>image uploaded</p> : null} */}
                {/* <img src={image} alt="" className="w-7 h-7" /> */}
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={disable ? true : false}
            className="primaryBtn self-end w-[148px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSite;
