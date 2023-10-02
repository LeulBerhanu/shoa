import React from "react";
import house from "../img/house.png";

function PartnershipDevtPage() {
  const bgImage = {
    backgroundImage: `url(${house})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="px-20">
      <div
        style={bgImage}
        className="container mx-auto h-[500px] w-full relative shadow-boxShadow rounded-[15px]"
      >
        {/* Color Overlay */}
        <div className="absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] ">
          <p className=" text-white text-[79px] w-[770px] font-light">
            About Our Partnership and Development Program
          </p>
          <p className="absolute bottom-0 right-0 py-4 px-6 text-white">
            By fikadu Brand Mangaer at shoa homes
          </p>
        </div>
      </div>

      <section>
        <div className="container mx-auto py-20 text-[28px]">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            possimus recusandae perspiciatis eos dolores obcaecati optio
            reprehenderit, maiores animi officia commodi nesciunt at libero,
            fugiat ipsa voluptatum omnis. Aliquam, obcaecati.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PartnershipDevtPage;
