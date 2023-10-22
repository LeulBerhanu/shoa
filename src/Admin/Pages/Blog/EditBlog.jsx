import React from "react";

function EditBlog() {
  return (
    <div className="px-10">
      <h2 className="font-bold">Edit Blog</h2>
      <form action="">
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
                />
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
                />
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
              />
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

export default EditBlog;
