import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import Card from "./card/Card";

export default function SwiperComponent({ slides }) {
  const [properties, setProperties] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/api/property`)
      .then((res) => res.data.properties)
      .then((data) => setProperties(data));
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        {properties &&
          properties.map((item) => (
            <SwiperSlide
              key={item._id}
              className="flex justify-center items-center object-cover"
            >
              <div className="object-cover">
                <Card item={item} />
              </div>
            </SwiperSlide>
          ))}

        {/* <SwiperSlide className="flex justify-center items-center object-cover">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
