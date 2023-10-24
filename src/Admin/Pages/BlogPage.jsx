import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSwapVert } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const tableBtn =
  "w-[60px] h-[40px]  flex items-center justify-center  px-4 py-3 font-medium border-2 border-black/25 rounded-lg";

function BlogPage() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blog")
      .then((res) => res.data.blogs)
      .then((data) => setBlogs(data));
  }, []);

  const handleDelete = async (id, idx) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // const prop = properties.splice(idx, 1);
      // console.log(prop);
      // setProperties(prop);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section className="px-10">
        <div className="flex justify-between items-center mt-9">
          <h2 className="text-2xl font-bold">Blog list</h2>
          <Link to="add-blog">
            <button className="primaryBtn ">+ Add Blog</button>
          </Link>
        </div>

        <div className="p-10 bg-white rounded-lg shadow-boxShadow">
          <table className="mx-auto text-xl border-separate border-spacing-0 border-2 rounded-lg ">
            <thead className="h-20 text-left">
              <tr className="[&>*]:px-4 [&>*]:font-normal">
                <th>
                  <div className="flex items-center gap-x-1">
                    <p>No</p> <MdSwapVert />
                  </div>
                </th>
                <th>Title</th>
                <th>
                  <div className="flex items-center gap-x-1">
                    <p>Date</p> <MdSwapVert />
                  </div>
                </th>
                <th>
                  <div className="flex items-center gap-x-1">
                    <p>Live</p> <MdSwapVert />
                  </div>
                </th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="[&>:nth-child(odd)]:bg-black/5 [&>*]:h-20">
              {blogs &&
                blogs.map((blog, idx) => (
                  <tr key={blog._id} className="[&>*]:px-4">
                    <td>{idx + 1}</td>
                    <td>{blog.title}</td>
                    <td className="overflow-x-hidden">
                      {moment(blog.updatedAt).format("DD MMM Y")}
                    </td>
                    <td>
                      <button
                        className={`${tableBtn} border-2 border-[#A3CFBB] bg-[#D1E7DD]`}
                      >
                        Yes
                      </button>
                    </td>
                    <td>
                      <div className="flex gap-x-3">
                        <Link to={`edit-blog/${blog._id}`}>
                          <button className={`${tableBtn} bg-white`}>
                            Edit
                          </button>
                        </Link>
                        <button
                          className={`${tableBtn} bg-white`}
                          onClick={() => handleDelete(blog._id)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
