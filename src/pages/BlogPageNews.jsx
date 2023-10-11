import React from "react";
import PageBanner from "../components/PageBanner";

function BlogPageNews() {
  return (
    <div>
      {/* News Header */}
      <h2 className="px-8 mb-2">Housing prices in Addis Ababa is changing</h2>

      <PageBanner name="News" footer="Read time: 6min" />

      <div className="container mx-auto px-8 text-xl mt-8 md:px-20">
        <span className="bg-primary uppercase px-5 py-3 inline-block text-white rounded-[15px]">
          General News
        </span>
      </div>

      <div className="container mx-auto flex flex-col gap-5 text-sm px-8 mt-8 text-justify md:text-base md:px-20 xl:text-xl">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          similique nihil repellat recusandae numquam, eos nemo, totam animi,
          quae eum laborum. Inventore enim excepturi sit saepe. Officiis soluta
          rerum inventore enim commodi earum necessitatibus vero consequatur
          porro ipsa fugit facere, amet aperiam nesciunt reprehenderit eum quia?
          Optio necessitatibus distinctio aut!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          similique nihil repellat recusandae numquam, eos nemo, totam animi,
          quae eum laborum. Inventore enim excepturi sit saepe. Officiis soluta
          rerum inventore enim commodi earum necessitatibus vero consequatur
          porro ipsa fugit facere, amet aperiam nesciunt reprehenderit eum quia?
          Optio necessitatibus distinctio aut!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          similique nihil repellat recusandae numquam, eos nemo, totam animi,
          quae eum laborum. Inventore enim excepturi sit saepe. Officiis soluta
          rerum inventore enim commodi earum necessitatibus vero consequatur
          porro ipsa fugit facere, amet aperiam nesciunt reprehenderit eum quia?
          Optio necessitatibus distinctio aut!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          similique nihil repellat recusandae numquam, eos nemo, totam animi,
          quae eum laborum. Inventore enim excepturi sit saepe. Officiis soluta
          rerum inventore enim commodi earum necessitatibus vero consequatur
          porro ipsa fugit facere, amet aperiam nesciunt reprehenderit eum quia?
          Optio necessitatibus distinctio aut!
        </p>
      </div>
    </div>
  );
}

export default BlogPageNews;
