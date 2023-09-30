import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Card from "./card/Card";

export default function SwiperComponent() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-full "
    >
      <SwiperSlide className="flex justify-center items-center object-cover">
        <div className="block object-cover">
          <Card />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Card />
      </SwiperSlide>
    </Swiper>
  );
}
