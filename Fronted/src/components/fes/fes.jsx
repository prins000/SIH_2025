import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';


const Fes = ({mainCategory}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [festivals, setFestivals] = useState([]);

  const category = mainCategory;
  console.log(category);
  
  useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:5000/api/category/${category}`)
        .then(response => response.json())
        .then(data => {
          setFestivals(data);
          console.log(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching destinations:', error);
          setLoading(false);
        });
    }, [category]);



  useEffect(() => {
    // Simulate loading time for festivals
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>
     <style jsx>{`
       .festival-swiper .swiper-slide {
         transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
       }
       
       .festival-swiper .swiper-slide:not(.swiper-slide-active) {
         transform: scale(0.85);
         opacity: 0.7;
       }
       
       .festival-swiper .swiper-slide-active {
         transform: scale(1);
         opacity: 1;
       }
       
       .festival-swiper .swiper-wrapper {
         transition-timing-function: linear;
         transition-duration: 10s;
       }
       
       .festival-swiper .swiper-slide img {
         transition: transform 0.8s ease-in-out;
       }
       
       .festival-swiper .swiper-slide:hover img {
         transform: scale(1.05);
       }
     `}</style>
     <section id="festivals"
     
     className="py-16  bg-[#ffeadf]">
      <div className="max-w-7xl mx-auto px-6  h-[60%] md:h-[80vh]">
        <h2 className="text-3xl lg:text-5xl font-bold text-orange-800 mb-12 text-center">
          Festivals 
        </h2>

        {/* Mobile Swiper */}
        <div className="md:hidden h-full">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-orange-600">Loading festivals...</div>
            </div>
          ) : (
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={festivals.length > 1 ? {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
              } : false}
              speed={6000}
              loop={festivals.length > 1}
              loopedSlides={2}
              spaceBetween={12}
              slidesPerView={1.05}
              allowTouchMove={false}
              freeMode={true}
              freeModeMomentum={false}
            >
              {festivals.map((fest, index) => (
                <SwiperSlide key={index}>
                  <div
                   onClick={() => navigate(`/places/${fest._id}`)}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={fest.images[0]}
                      alt={fest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold">{fest.name}</h3>
                      <p className="text-sm mt-1 text-gray-200">{fest.desc}</p>
                     
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )} 
        </div>

        <button 
          onClick={() => navigate(`/category/${category}/Show-All-Places`)} 
          className="block relative md:left-[40%] text-[#3b3b3b] hover:text-black mt-8 md:mt-4 md:mb-8 mx-auto bg-transparent border-2 px-6 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:border-green-600"
        >
          <p className="hover:scale-105 relative ">View All</p>
        </button>

        {/* Desktop Continuous Swiper */}
        <div className="hidden h-full md:block ">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-green-600">Loading festivals...</div>
            </div>
          ) : (
            <Swiper
              modules={[Autoplay]}
              autoplay={festivals.length > 1 ? {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
              } : false}
              speed={8000}
              loop={festivals.length > 1}
              loopedSlides={3}
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={true}
              allowTouchMove={false}
              freeMode={true}
              freeModeMomentum={false}
              className="festival-swiper"
            >
              {festivals.map((fest, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={fest.images[0]}
                      alt={fest.name}
                      className="w-full h-96  object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold">{fest.name}</h3>
                      <p className="text-sm mt-1 text-gray-200">{fest.desc}</p>
                      <button 
                      onClick={() => navigate(`/places/${fest._id}`)}
                      className="mt-3 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                        Explore
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

      </div>
    </section>
    </>
  )
}

export default Fes;