import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";


const SlideBar = () => {

    const places = [
  {
    name: "Dassam Falls",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Dassam_falls%2C_Jharkhand.jpg",
  },
  {
    name: "Hundru Falls",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hundru_Falls.jpg",
  },
  {
    name: "Jonha Falls",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jonha_Falls.jpg",
  },
];

  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            {/* Background Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
              style={{ backgroundImage: `url(${place.img})` }}
            ></div>

            {/* Foreground Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
              <motion.img
                key={place.img} // trigger animation when image changes
                src={place.img}
                alt={place.name}
                className="w-full max-w-3xl h-[60vh] object-cover rounded-2xl shadow-lg"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {place.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideBar
