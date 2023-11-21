import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSwapVert } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const tableBtn =
  "w-[60px] h-[40px]  flex items-center justify-center  px-4 py-3 font-medium border-2 border-black/25 rounded-lg";

function Site() {
  const [sites, setSites] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/site`)
      .then((res) => res.data.sites)
      .then((data) => setSites(data));
  }, []);

  const deleteElement = (id, idx, e) => {
    e.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const newArray = sites.filter((_, index) => index !== idx);
      setSites(newArray);

      handleDelete(id);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API}/api/site/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section className="px-10">
        <div className="flex justify-between items-center mt-9">
          <h2 className="text-2xl font-bold">Sites list</h2>
          <Link to="add-site">
            <button className="primaryBtn">+ Add Site</button>
          </Link>
        </div>

        <div className="p-10 bg-white rounded-lg shadow-boxShadow ">
          <table className="mx-auto lg:text-xl border-separate border-spacing-0 border-2 rounded-lg w-full ">
            <thead className="h-20 text-left">
              <tr className="[&>*]:px-4 lg:[&>*]:px-10 [&>*]:font-normal">
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
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="[&>:nth-child(odd)]:bg-black/5 [&>*]:h-20">
              {sites &&
                sites.map((site, idx) => (
                  <tr key={site._id} className="[&>*]:px-4 lg:[&>*]:px-10">
                    <td>{idx + 1}</td>
                    <td className="max-w-[550px]">{site.title}</td>
                    <td>{moment(site.updatedAt).format("DD MMM Y")}</td>
                    <td>
                      <div className="flex gap-x-3">
                        <Link to={`edit-site/${site._id}`}>
                          <button className={`${tableBtn} bg-white`}>
                            Edit
                          </button>
                        </Link>
                        <button
                          className={`${tableBtn} bg-white`}
                          onClick={(e) => deleteElement(site._id, idx, e)}
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

export default Site;
