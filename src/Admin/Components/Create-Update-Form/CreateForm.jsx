import React from "react";

function CreateForm() {
  return (
    <div className="px-10">
      <h2 className="font-bold">Add Site</h2>
      <form action="">
        <div className="flex flex-col gap-y-9 bg-white rounded-lg p-10">
          {/* Title/Price and Image */}
          <div className="flex w-full gap-x-3">
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
                <label htmlFor="price" className="text-2xl mb-6">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Enter price"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="price" className="text-2xl mb-6">
                Image
              </label>
              <input
                id="price"
                type="file"
                placeholder="Enter price"
                className="h-full p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="description" className="text-2xl mb-6">
              Description
            </label>
            <textarea
              id="price"
              type="description"
              placeholder="Enter description"
              className=" p-5 h-[220px] min-h-[70px] max-h-[220px] placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
            />
          </div>

          <button type="submit" className="primaryBtn self-end">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
