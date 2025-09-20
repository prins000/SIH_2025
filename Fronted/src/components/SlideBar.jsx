import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const SlideBar = () => {
    const swiperRef = useRef(null);

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
    <div className="w-full  sm:h-screen md:h-screen lg:h-screen xl:h-screen relative">
     
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}
        className="h-full "
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            {/* Background Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1757386117955-c491ad384a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D)` }}
            ></div>

            {/* Foreground Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-center  p-2 sm:p-4 md:p-6 lg:p-8">
              
              <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg px-2">
                {place.name}
              </h2>
              <motion.img
                key={place.img} // trigger animation when image changes
                src="https://images.unsplash.com/photo-1757386117955-c491ad384a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                alt={place.name}
                className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Arrows - Responsive Positioning */}
      <div className="absolute bottom-[10%] sm:bottom-[12%] md:bottom-[15%] right-[15%] sm:right-[18%] md:right-[22%] flex gap-2 sm:gap-3 z-10">
        <div 
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="!text-white !text-2xl sm:!text-3xl md:!text-4xl hover:!text-gray-300 transition-all duration-300 !relative !top-0 !left-0 !right-0 !m-0 !w-auto !h-auto !bg-transparent cursor-pointer select-none user-select-none"
        >
          <svg className="!w-6 !h-6 sm:!w-7 sm:!h-7 md:!w-8 md:!h-8 drop-shadow-lg pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div 
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="!text-white !text-2xl sm:!text-3xl md:!text-4xl hover:!text-gray-300 transition-all duration-300 !relative !top-0 !left-0 !right-0 !m-0 !w-auto !h-auto !bg-transparent cursor-pointer select-none user-select-none"
        >
          <svg className="!w-6 !h-6 sm:!w-7 sm:!h-7 md:!w-8 md:!h-8 drop-shadow-lg pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
    </div>
  )
}

export default SlideBar
