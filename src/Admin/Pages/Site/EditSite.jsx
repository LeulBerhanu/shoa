import React from "react";
import EditForm from "../../Components/Create-Update-Form/EditForm";

function EditSite() {
  return (
    <div className="px-10">
      <h2 className="font-bold">Edit Site</h2>
      <form action="">
        <div className="flex flex-col gap-y-9 bg-white rounded-lg p-10">
          {/* Title/Price and Image */}
          <div className="flex w-1/2 gap-x-12">
            {/* Title and Price */}
            <div className="flex flex-col gap-y-9  w-full">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-2xl mb-6">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="readTime" className="text-2xl mb-6">
                  Map Location
                </label>
                <input
                  id="readTime"
                  type="text"
                  placeholder="Enter location name"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="primaryBtn self-end w-[148px]">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSite;
