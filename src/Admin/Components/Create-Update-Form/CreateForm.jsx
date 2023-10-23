import React, { useEffect, useState } from "react";
import UploadImage from "../UploadImage";
import axios from "axios";
import { FaCheck } from "react-icons/fa";

function CreateForm() {
  const [image, setImage] = useState({});

  const [data, setData] = useState({
    name: "",
    price: "",
    size: "",
    bedRoom: "",
    bathRoom: "",
    buildingStatus: "",
    sellingStatus: "",
    description: "",
    mapLocation: "",
    siteId: "",
    featured: false,
    featuredStatement: "",
    propertyType: "",
  });

  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  console.log(selectedSite);

  console.log(data);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/site")
      .then((res) => setSites(res.data.sites));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/property",
        {
          ...data,
          propertyImage: image,
          siteId: selectedSite,
        },
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
    <div className="px-10">
      <h2 className="font-bold">Add Property</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-9 bg-white rounded-lg p-10">
          {/* Title/Price and Image */}
          <div className="grid grid-cols-2 w-full gap-x-3">
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
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
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
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, price: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="text-2xl mb-6">Property Type</label>
                <select
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      propertyType: e.target.value,
                    }))
                  }
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                >
                  <option value="">--Choose property type--</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="size" className="text-2xl mb-6">
                  Size
                </label>
                <input
                  id="size"
                  type="text"
                  placeholder="Enter size"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, size: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bedroom" className="text-2xl mb-6">
                  Bedroom
                </label>
                <input
                  id="bedroom"
                  type="number"
                  placeholder="Enter number of bedroom"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, bedRoom: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bathroom" className="text-2xl mb-6">
                  Bathroom
                </label>
                <input
                  id="bathroom"
                  type="number"
                  placeholder="Enter number of bathroom"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, bathRoom: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col ">
                <label htmlFor="description" className="text-2xl mb-6">
                  Description
                </label>
                <textarea
                  id="price"
                  type="description"
                  placeholder="Enter description"
                  className=" p-5 h-[220px] min-h-[70px] max-h-[220px] placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="mapLocation" className="text-2xl mb-6">
                  Map Location
                </label>
                <input
                  id="mapLocation"
                  type="text"
                  placeholder="Enter location name"
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      mapLocation: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="text-2xl mb-6">Site</label>
                <select
                  onChange={(e) => setSelectedSite(e.target.value)}
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                >
                  <option value="">--Choose site--</option>
                  {sites &&
                    sites.map((site) => {
                      return (
                        <option key={site._id} value={site._id}>
                          {site.title}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-2xl mb-6">Building Status</label>
                <select
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      buildingStatus: e.target.value,
                    }))
                  }
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                >
                  <option value="">--Choose building status--</option>
                  <option value="semi-finished">Semi Finished</option>
                  <option value="finished">Finished</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-2xl mb-6">Selling Status</label>
                <select
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      sellingStatus: e.target.value,
                    }))
                  }
                  className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                >
                  <option value="">--Choose selling status--</option>
                  <option value="sold-out">Sold Out</option>
                  <option value="on-sale">On Sale</option>
                  <option value="discount">Discount</option>
                </select>
              </div>

              <div className="flex align-middle gap-x-3">
                <input
                  type="checkbox"
                  id="featuredStatus"
                  className="text-5xl h-9 w-9"
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      featured: !prev.featured,
                    }))
                  }
                />
                <label htmlFor="featuredStatus" className="text-2xl mb-6">
                  Features Status
                </label>
              </div>

              {data?.featured ? (
                <div className="flex flex-col">
                  <label htmlFor="featuredStatement" className="text-2xl mb-6">
                    Featured Statement
                  </label>
                  <input
                    id="featuredStatement"
                    type="text"
                    placeholder="Enter featured statement"
                    className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        featuredStatement: e.target.value,
                      }))
                    }
                  />
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-y-9">
              <div className="flex flex-col w-full">
                <label className="text-2xl mb-6">Image</label>
                <div className="h-full p-1 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none">
                  <UploadImage image={image} setImage={setImage} />
                </div>
              </div>

              <div className="flex flex-col  w-full">
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
          </div>

          {/* <div className="flex flex-col w-1/2">
            <label htmlFor="description" className="text-2xl mb-6">
              Description
            </label>
            <textarea
              id="price"
              type="description"
              placeholder="Enter description"
              className=" p-5 h-[220px] min-h-[70px] max-h-[220px] placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
            />
          </div> */}

          <button type="submit" className="primaryBtn self-end">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
