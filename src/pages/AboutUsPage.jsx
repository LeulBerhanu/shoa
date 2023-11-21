import React from "react";
import house from "../img/house.png";
import PageBanner from "../components/PageBanner";
import bannerPar from "../img/aboutUsBanner/bannerPar.svg";
import bannerParSolid from "../img/aboutUsBanner/bannerParSolid.svg";
import bannerPic from "../img/aboutUsBanner/bannerPic.svg";

function AboutUsPage() {
  const bgImage = {
    backgroundImage: `url(${house})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex relative w-full h-[430px] md:h-[490px] xl:h-[672px] rounded-[15px]">
          <img
            src={bannerPar}
            className="absolute z-30 px-4 md:px-[122px] py-[60px]"
          />
          <img
            src={bannerPic}
            className="absolute -bottom-[.5px] z-20 w-[400px] xl:w-auto"
            alt=""
          />
          <img
            src={bannerParSolid}
            className="absolute px-4 md:px-[122px] py-[60px]"
          />

          <p className="hidden absolute  right-7 text-white text-justify bottom-6 leading-tight w-80 md:block xl:w-[833px] xl:bottom-4 xl:right-9 xl:text-[28px]">
            Shoa is a well-known brand name in Ethiopia for over 6o years in
            different sectors, though mainly people are fond of the merchandise
            business we are in. The shoa supermarket chains are one of the
            leading and most popular convenient stores in Addis Ababa with over
            20 branches to date.
          </p>

          {/* Bg Color */}
          <div className="bg-primary absolute w-full h-full -z-10"></div>
        </div>
      </div>

      <div className="px-4 text-xs container mx-auto text-justify leading-normal md:px-20 xl:text-[28px]">
        <p className="my-8 md:my-16">
          Shoa is a well-known brand name in Ethiopia for over 6o years in
          different sectors, though mainly people are fond of the merchandise
          business we are in. The shoa supermarket chains are one of the leading
          and most popular convenient stores in Addis Ababa with over 20
          branches to date.
        </p>
        <p>
          The chain stores serve the public from high income customers to low
          income customers meeting their needs with affordable prices. The
          people consider Shoa their brand for we really are concerned and serve
          from heart considering the economic environment and coming up with
          strategies to bring the right products with a reasonable price. Most
          holiday seasons we host almost above 50% of the consumers with
          directly related products in sufficient amount and over 40-50%
          discount from the regular market.
        </p>
        <h2 className="mb-3 xl:text-4xl">Why choose us?</h2>
        <ul className="list-disc mb-5 text-left ml-8 md:ml-14">
          <li>Quality</li>
          <li>Convenience</li>
          <li>Affordable</li>
          <li>Suitablle Contemporaty Ethiopian life</li>
        </ul>
        <p className="my-8 md:my-16">
          SHOA being the most known and trustworthy brand in other business
          lines for over half a century, has come to deliver solution to the
          most concerning housing challenges.
        </p>
        <p>
          We started with two sites at Bole Bulbula, a fast growing living area,
          and at Goro, in the most convenient location for newly married and
          family with children in a river side with a large area compound of its
          own neighbourhood. The buildings are a G+9 apartments only for
          residential purpose. Therefore, it is a peaceful living space. The
          best part is, the elements in the apartments are extra amazing and the
          promotional price is unbelievable for many. If you catch us sooner you
          would enjoy the promotional discount rate and can choose the floor and
          side of the house.
        </p>

        <h2 className="mb-3 xl:text-4xl">Payment options:</h2>
        <ul className="list-disc ml-8 md:ml-14 text-left">
          <li>20% advance payment, and four time payment for the rest.</li>
          <li>Can pay full amount and enjoy a 1% discount.</li>
          <li>All payment values are in dollar.</li>
          <li>Delivery time is between 15 to 18 months after purchase.</li>
        </ul>
      </div>

      {/* <section>
        <div className="px-4  container flex flex-col gap-4 justify-between mx-auto object-cover py-5 md:py-14 md:px-20 xl:flex-row ">
          <div
            style={bgImage}
            className="relative h-[300px] rounded-[15px] md:w-[582px] md:h-[645px]"
          >
            <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] "></div>
          </div>
          <div
            style={bgImage}
            className="relative h-[300px] rounded-[15px] md:w-[582px] md:h-[645px]"
          >
            <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] "></div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="px-4 container mx-auto  leading-normal text-xs text-justify  md:px-20  xl:text-[28px]">
          <p className="my-8 md:my-16">
            Recently to tackle the sever problem in shortage and expensiveness
            of housing, we joined the real estate sector with adequate resources
            like, land, finance and the right expertise in the industry. To
            bring the best quality deliverability we collaborated with the right
            and handpicked partners handling important tasks while we focused on
            the major task.
          </p>
          <p className="my-8 md:my-16">
            In every sector being the first or the late comer both have
            advantages and disadvantages. We believe, us joining the sector
            recently, brought much of an advantage than disadvantage. We get to
            learn the real demands of people looking for housing, the place
            strategy, the price strategy, quality issues and necessary
            facilities to cover. With this we are determined and committed to
            build and hand over affordable yet well fit apartment and villa
            houses in convenient location in Addis Ababa with Ethiopian touch.
            When you invest in real estate, invest in SHOA homes and rip the
            great interest you get.
          </p>
          <p className="italic font-medium">
            We want our apartments and villa houses to be home for Ethiopians
            with Ethiopian essence and features, not losing a bit of the house
            we have lived in. Regardless of where you are right now, weather
            abroad or in land, if you chose to make Addis your home, our housing
            projects are the ultimate choice. Shoa homes is known in keeping
            promises, because we calculate the odd before we give promises, so,
            you are in good hands when you decide to buy your next house from
            us.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
