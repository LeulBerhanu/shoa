import axios from "axios";
import React, { useState } from "react";
import blogValidation from "../../Validation/blogValidation";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);

  const [data, setData] = useState({
    title: "",
    body: "",
    readTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const errorValidation = blogValidation(data);
    setErrors(errorValidation);

    if (Object.keys(errorValidation).length === 0) {
      scrollToTop();
      setUploading(true);

      try {
        const res = await axios.post("http://localhost:4000/api/blog", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("Response", res.data);

        navigate("/admin/blog");
      } catch (err) {
        console.error("Error: ", err);
      }
    }

    setUploading(false);
    setDisable(false);
  };

  return (
    <div className="px-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Add Blog</h2>
        {uploading && <p className="text-2xl">Uploading, please wait ...</p>}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-9 bg-white rounded-lg p-10">
          {/* Title/Price and Image */}
          <div className="flex w-full gap-x-12">
            {/* Title and Price */}
            <div className="flex flex-col gap-y-9  w-full">
              <div className="flex flex-col">
                <label htmlFor="title" className="text-2xl mb-6">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
                {errors?.title ? (
                  <p className="invalidForm">{errors.title}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="readTime" className="text-2xl mb-6">
                  Read Time
                </label>
                <input
                  id="readTime"
                  type="text"
                  placeholder="Enter read time"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, readTime: e.target.value }))
                  }
                />
                {errors?.readTime ? (
                  <p className="invalidForm">{errors.readTime}</p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="description" className="text-2xl mb-6">
                Description
              </label>
              <textarea
                id="price"
                type="description"
                placeholder="Enter description"
                className=" p-5 h-[233px] min-h-[70px] max-h-[233px] placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, body: e.target.value }))
                }
              />
              {errors?.body ? (
                <p className="invalidForm">{errors.body}</p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
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

export default AddBlog;
