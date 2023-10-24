import axios from "axios";
import React, { useEffect, useState } from "react";
import blogValidation from "../../Validation/blogValidation";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);
  console.log(errors);

  const [blog, setBlog] = useState({
    title: "",
    body: "",
    readTime: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/blog/${id}`)
      .then((res) => setBlog(res.data.blog));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorValidation = blogValidation(blog);
    setErrors(errorValidation);

    if (Object.keys(errorValidation).length === 0) {
      try {
        const res = await axios.patch(
          `http://localhost:4000/api/blog/${id}`,
          blog,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log("Response", res.data);

        navigate("/admin/blog");
      } catch (err) {
        console.error("Error: ", err);
      }
    }
    setDisable(false);
  };

  return (
    <div className="px-10">
      <h2 className="font-bold">Edit Blog</h2>
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
                  value={blog.title}
                  onChange={(e) =>
                    setBlog((prev) => ({ ...prev, title: e.target.value }))
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
                  value={blog.readTime}
                  onChange={(e) =>
                    setBlog((prev) => ({ ...prev, readTime: e.target.value }))
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
                value={blog.body}
                onChange={(e) =>
                  setBlog((prev) => ({ ...prev, body: e.target.value }))
                }
              />
              {errors?.body ? (
                <p className="invalidForm">{errors.body}</p>
              ) : null}
            </div>
          </div>

          <button
            disabled={disable ? true : false}
            type="submit"
            className="primaryBtn self-end w-[148px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;
