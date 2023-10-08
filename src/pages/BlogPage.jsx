import React from "react";
import PageBanner from "../components/PageBanner";
import LinkBox from "../components/LinkBox";

function BlogPage() {
  return (
    <div>
      <PageBanner name="Blog" />

      <div className="container mx-auto gap-y-3 flex flex-col mt-9 md:grid md:grid-cols-2 md:gap-0 auto-rows-fr md:mt-24">
        <LinkBox content="Housing prices in Addis Ababa is changing" />
        <LinkBox content="Is the current inflation affecting real estate owners" />
        <LinkBox content="What’s new at shoa real estate listings" />
      </div>
    </div>
  );
}

export default BlogPage;
