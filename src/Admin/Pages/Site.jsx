import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSwapVert } from "react-icons/md";
import { Link } from "react-router-dom";

const tableBtn =
  "w-[60px] h-[40px]  flex items-center justify-center  px-4 py-3 font-medium border-2 border-black/25 rounded-lg";

function Site() {
  return (
    <div>
      <section className="px-10">
        <div className="flex justify-between items-center mt-9">
          <h2 className="text-2xl font-bold">Sites list</h2>
          <button className="primaryBtn">
            <Link to="add-site"> + Add Site</Link>
          </button>
        </div>

        <div className="p-10 bg-white rounded-lg shadow-boxShadow">
          <table className="mx-auto text-xl border-separate border-spacing-0 border-2 rounded-lg ">
            <thead className="h-20 text-left">
              <tr className="[&>*]:px-10 [&>*]:font-normal">
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
              <tr className="[&>*]:px-10">
                <td>1</td>
                <td>Bole Bulbula Site, Two bedroom</td>
                <td>28 Oct 2023</td>
                <td>
                  <button
                    className={`${tableBtn} border-2 border-[#A3CFBB] bg-[#D1E7DD]`}
                  >
                    Yes
                  </button>
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <button className={`${tableBtn} bg-white`}>
                      <Link to="edit-site">Edit</Link>
                    </button>
                    <button className={`${tableBtn} bg-white`}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="[&>*]:px-10">
                <td>2</td>
                <td>Bole Bulbula Site, Two bedroom</td>
                <td>28 Oct 2023</td>
                <td>
                  <button
                    className={`${tableBtn} border-2 border-[#F1AEB5] bg-[#F8D7DA]`}
                  >
                    No
                  </button>
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <button className={`${tableBtn} bg-white`}>
                      <Link to="edit-site">Edit</Link>
                    </button>
                    <button className={`${tableBtn} bg-white`}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="[&>*]:px-10">
                <td>3</td>
                <td>Bole Bulbula Site, Two bedroom</td>
                <td>28 Oct 2023</td>
                <td>
                  <button
                    className={`${tableBtn} border-2 border-[#A3CFBB] bg-[#D1E7DD]`}
                  >
                    Yes
                  </button>
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <button className={`${tableBtn} bg-white`}>
                      <Link to="edit-site">Edit</Link>
                    </button>
                    <button className={`${tableBtn} bg-white`}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="[&>*]:px-10">
                <td>4</td>
                <td>Bole Bulbula Site, Two bedroom</td>
                <td>28 Oct 2023</td>
                <td>
                  <button
                    className={`${tableBtn} border-2 border-[#A3CFBB] bg-[#D1E7DD]`}
                  >
                    Yes
                  </button>
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <button className={`${tableBtn} bg-white`}>
                      <Link to="edit-site">Edit</Link>
                    </button>
                    <button className={`${tableBtn} bg-white`}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="[&>*]:px-10">
                <td>5</td>
                <td>Bole Bulbula Site, Two bedroom</td>
                <td>28 Oct 2023</td>
                <td>
                  <button
                    className={`${tableBtn} border-2 border-[#A3CFBB] bg-[#D1E7DD]`}
                  >
                    Yes
                  </button>
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <button className={`${tableBtn} bg-white`}>
                      <Link to="edit-site">Edit</Link>
                    </button>
                    <button className={`${tableBtn} bg-white`}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="[&>*]:px-10">
                <td>6</td>
                <td>Bole Bulbula Site, Two bedroom</td>
                <td>28 Oct 2023</td>
                <td>
                  <button
                    className={`${tableBtn} border-2 border-[#F1AEB5] bg-[#F8D7DA]`}
                  >
                    No
                  </button>
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <button className={`${tableBtn} bg-white`}>
                      <Link to="edit-site">Edit</Link>
                    </button>
                    <button className={`${tableBtn} bg-white`}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Site;
