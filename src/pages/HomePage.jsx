import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SmallCard from "../components/card/SmallCard";
import MapComponent from "../components/MapComponent";
import SwiperComponent from "../components/SwiperComponent";
import ContactComponent from "../components/Contact/ContactComponent";
// Icons
import LocationName from "../components/LocationName";
import LinkBoxHomePage from "../components/LinkBoxHomePage";
import axios from "axios";
import LocationComp from "../components/LocationComp";

const h2Style = " px-8 text-center capitalize text-[28px] xl:text-4xl";

function HomePage() {
  const [blogs, setBlogs] = useState(null);
  const [sites, setSites] = useState(null);
  const [properties, setProperties] = useState(null);
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blog")
      .then((res) => res.data.blogs)
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/site")
      .then((res) => res.data.sites)
      .then((data) => setSites(data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/property")
      .then((res) => res.data.properties)
      .then((data) => setProperties(data));
  }, []);

  useEffect(() => {
    if (properties) {
      setFeaturedProperties(properties.filter((item) => item.featured));
    }
  }, [properties]);

  console.log("sites", sites);

  return (
    <>
      <h1 className="px-6 text-center capitalize text-[40px] xl:text-[80px]">
        Opening doors, <br /> building communities!
      </h1>

      <section id="slider_section">
        <div className="h-[620px] md:hidden ">
          <SwiperComponent slides="1" />
        </div>
        <div className="hidden md:block lg:hidden h-[470px] ">
          <SwiperComponent slides="1" />
        </div>
        <div className="hidden lg:block h-[400px] ">
          <SwiperComponent slides="2" />
        </div>
      </section>

      <h2 className={h2Style}>Why choose shoa Homes?</h2>
      <Hero />

      <section id="featured_properties_section">
        <h2 className={h2Style}>Featured properties</h2>
        <div className=" flex flex-col gap-11 justify-center items-center xl:flex-row ">
          {featuredProperties &&
            featuredProperties.map((item) => <SmallCard item={item} />)}

          {/* <SmallCard discountBadge /> */}
        </div>
      </section>

      <section id="blog_section">
        <h2 className={h2Style}>Blog</h2>
        <div className="container mx-auto px-7 gap-y-4 flex flex-col text-center text-[28px]  auto-rows-fr md:text-2xl md:grid md:grid-cols-2 xl:flex xl:flex-row xl:text-4xl xl:h-[323px] xl:items-stretch">
          {blogs &&
            blogs.map((blog) => (
              <div key={blog._id}>
                <LinkBoxHomePage content={blog.title} id={blog._id} />
              </div>
            ))}
        </div>
      </section>

      <section>
        <h2 className={h2Style}>Our sites</h2>
        <div className="flex flex-col gap-14 px-4 md:px-20 ">
          {sites &&
            sites.map((site, index) => (
              <div
                className={`container flex items-center justify-center mx-auto relative `}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="ml-3 w-[136px] h-[204px] xl:w-[506px] xl:h-[527px]">
                      <LocationName
                        name={site.title}
                        img={site?.siteImage?.url}
                        rounded
                      />
                    </div>

                    <div className="w-[200px] h-[170px] relative -left-3 md:w-[300px] xl:w-[600px] xl:h-[400px]">
                      <MapComponent location={site.location} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[200px] h-[170px] relative left-3 z-10 md:w-[300px] xl:w-[600px] xl:h-[400px]">
                      <MapComponent location={site.location} />
                    </div>

                    <div className="w-[136px] h-[204px] mr-3 xl:w-[506px] xl:h-[527px] ">
                      <LocationName
                        name={site.title}
                        img={site?.siteImage?.url}
                        rounded
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

          {/* <div className="container flex items-center justify-center mx-auto relative">
            <div className="w-[200px] h-[170px] relative left-3 z-10 md:w-[300px] xl:w-[600px] xl:h-[400px]">
              <MapComponent />
            </div>

            <div className="w-[136px] h-[204px] mr-3 xl:h-[527px] xl:w-[506px]">
              <LocationName
                name="Welo Sefer"
                message="(Coming Soon)"
                rounded
                closed
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="px-4 md:px-20">
          <h2 className={h2Style}>Contact us</h2>
          <ContactComponent />
        </div>
      </section>

      {/* Office Location */}
      <section id="location_section">
        <h2 className={h2Style}>Office Location</h2>

        {/* <LocationMap /> */}
        <div className=" container px-4 h-[250px]  mx-auto md:px-20 md:h-[450px] xl:w-[994px]">
          <LocationComp />
        </div>
      </section>
    </>
  );
}

export default HomePage;
