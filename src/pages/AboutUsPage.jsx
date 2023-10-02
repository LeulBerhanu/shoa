import React from "react";
import house from "../img/house.png";
import PageBanner from "../components/PageBanner";

function AboutUsPage() {
  const bgImage = {
    backgroundImage: `url(${house})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="px-20">
      <div className="container mx-auto">
        <PageBanner name="About Us" />
      </div>

      <div className="container mx-auto text-[28px] text-justify mb">
        <p className="my-16">
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
        <h2 className="mb-0">Why choose us?</h2>
        <ul className="list-disc ml-8 mb-5">
          <li>Quality</li>
          <li>Convenience</li>
          <li>Affordable</li>
          <li>Suitablle Contemporaty Ethiopian life</li>
        </ul>
        <p>
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

        <h2 className="mb-0">Payment options:</h2>
        <ul className="list-disc ml-8">
          <li>20% advance payment, and four time payment for the rest.</li>
          <li>Can pay full amount and enjoy a 1% discount.</li>
          <li>All payment values are in dollar.</li>
          <li>Delivery time is between 15 to 18 months after purchase.</li>
        </ul>
      </div>

      <section>
        <div className="container flex justify-between mx-auto object-cover py-14 ">
          <div
            style={bgImage}
            className="relative w-[582px] h-[645px]  rounded-[15px]"
          >
            <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] "></div>
          </div>
          <div
            style={bgImage}
            className="relative w-[582px] h-[645px]   rounded-[15px]"
          >
            <div className="flex items-center absolute w-full h-full rounded-[15px] bg-primary_light/[.50] py-[73px] px-14 leading-[1.15] "></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto text-[28px] text-justify mb-56">
          <p className="my-16">
            Recently to tackle the sever problem in shortage and expensiveness
            of housing, we joined the real estate sector with adequate resources
            like, land, finance and the right expertise in the industry. To
            bring the best quality deliverability we collaborated with the right
            and handpicked partners handling important tasks while we focused on
            the major task.
          </p>
          <p className="my-16">
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
