import { useState, useEffect } from "react";
import Axios from "axios";

import PageBanner from "../components/PageBanner";
import LinkBox from "../components/LinkBox";

function BlogPage() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:4000/api/blog")
      .then((res) => res.data.blogs)
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <PageBanner name="Blog" />

      <div className="container mx-auto gap-y-3 flex flex-col mt-9 md:grid md:grid-cols-2 md:gap-0 auto-rows-fr md:mt-24">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog._id}>
              <LinkBox content={blog.title} id={blog._id} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default BlogPage;

{
  /* <LinkBox content="Housing prices in Addis Ababa is changing" />
<LinkBox content="Is the current inflation affecting real estate owners" />
<LinkBox content="What’s new at shoa real estate listings" /> */
}
