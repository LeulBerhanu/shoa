import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogPageNews() {
  const params = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/blog/${params.id}`)
      .then((res) => res.data)
      .then((data) => setBlog(data.blog));
  }, []);

  return blog ? (
    <div>
      {/* News Header */}

      <PageBanner name="News" footer={`Read time: ${blog.readTime}`} />

      <div className="container mx-auto px-8 text-xl mt-8 md:px-20">
        <span className="bg-primary uppercase px-5 py-3 inline-block text-white rounded-[15px]">
          General News
        </span>
      </div>

      <div className="container mx-auto px-8 md:px-20">
        <h2 className="mb-2">{blog.title}</h2>
      </div>

      <div className="container mx-auto flex flex-col gap-5 text-sm px-8 mt-8 text-justify md:text-base md:px-20 xl:text-xl">
        <p>{blog.body}</p>
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
}

export default BlogPageNews;
