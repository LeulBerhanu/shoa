import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Card from "../../components/card/Card";
import LinkBoxHomePage from "../../components/LinkBoxHomePage";
import LocationName from "../../components/LocationName";
import MapComponent from "../../components/MapComponent";

function Dashboard() {
  const [blogs, setBlogs] = useState(null);
  const [sites, setSites] = useState(null);
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/blog`)
      .then((res) => res.data.blogs)
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/site`)
      .then((res) => res.data.sites)
      .then((data) => setSites(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/property`)
      .then((res) => res.data.properties)
      .then((data) => setProperties(data));
  }, []);

  return (
    <div>
      <Header currentPage="Dashboard" />

      {/* Property Section */}
      <section className="px-5">
        <div className="flex justify-between items-center mt-9">
          <h2 className="text-2xl font-bold">Property</h2>
        </div>

        <div className="p-10 bg-white rounded-lg flex justify-center shadow-boxShadow">
          <div className="flex flex-col gap-y-6  xl:grid xl:grid-cols-2 gap-10">
            {properties &&
              properties.map((item) => (
                <div key={item._id} className="object-cover">
                  <Card item={item} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Site Section */}
      <section className="px-5">
        <div className="flex justify-between items-center mt-9">
          <h2 className="text-2xl font-bold">Site</h2>
        </div>

        <div className="p-10 bg-white rounded-lg shadow-boxShadow">
          {sites &&
            sites.map((site, index) => (
              <div key={site._id} className="mb-9">
                <div className="text-3xl mb-3">
                  {site.title}{" "}
                  {site.remark && (
                    <span className="text-base">({site.remark})</span>
                  )}
                </div>
                <MapComponent location={site.location} />
              </div>
            ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-5">
        <div className="flex justify-between items-center mt-9">
          <h2 className="text-2xl font-bold">Blog</h2>
        </div>

        <div className="p-10 bg-white rounded-lg shadow-boxShadow text-2xl">
          <div className="flex flex-col gap-y-6  xl:grid xl:grid-cols-2 gap-10">
            {blogs &&
              blogs.map((blog) => (
                <div key={blog._id}>
                  <LinkBoxHomePage content={blog.title} id={blog._id} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
