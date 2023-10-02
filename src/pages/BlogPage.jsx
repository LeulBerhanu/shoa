import React from "react";
import PageBanner from "../components/PageBanner";
import LinkBox from "../components/LinkBox";

function BlogPage() {
  return (
    <div>
      <div className="container mx-auto px-20">
        <PageBanner name="Blog" />
      </div>

      <div className="container mx-auto grid grid-cols-2 auto-rows-fr mt-24">
        <LinkBox
          content="Housing prices in Addis Ababa
is changing"
        />
        <LinkBox content="Is the current inflation affecting real estate owners" />
        <LinkBox content="What’s new at shoa real estate listings" />
      </div>
    </div>
  );
}

export default BlogPage;
