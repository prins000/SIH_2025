import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Jharkhand Waterfalls",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Tribal Culture",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "Wildlife Safari",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const VideoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-black py-6">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full z-10"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Video Cards */}
      <div className="w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={videos[current].id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] shadow-xl rounded-2xl overflow-hidden"
          >
            <video
              src={videos[current].src}
              controls
              autoPlay
              loop
              muted
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl"
            />
            <div className="bg-white text-center p-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                {videos[current].title}
              </h2>
              <button  className="mt-2">Explore</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full z-10"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default VideoCarousel;