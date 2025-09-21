import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Cus = ({ mainCategory }) => {
  const [loading, setLoading] = useState(true);
  const [cuisines, setCuisines] = useState([]);

  const navigate = useNavigate();
  const category = mainCategory;

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/category/${category}`)
      .then(response => response.json())
      .then(data => {
        setCuisines(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    // Simulate loading time for cuisines
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="food"
      style={{
        backgroundImage: "url('/cusine_back.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}
      className="relative py-16 bg-yellow-50 h-[60vh] md:h-[80vh]"
    >
      {/* Title ABOVE overlay */}
      <h2 className="relative z-20 text-3xl lg:text-5xl font-bold text-center text-white mb-12">
        Cuisine
      </h2>

      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[70%]">
        {/* Mobile Swiper */}
        <div className="md:hidden h-full">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-yellow-600">Loading cuisines...</div>
            </div>
          ) : (
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={
                cuisines.length > 1
                  ? {
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                      reverseDirection: false,
                    }
                  : false
              }
              speed={6000}
              loop={cuisines.length > 1}
              loopedSlides={2}
              spaceBetween={12}
              slidesPerView={1.15}
              allowTouchMove={false}
              freeMode={true}
              freeModeMomentum={false}
            >
              {cuisines.map((item, index) => (
                <SwiperSlide key={index}>
                  <div 
                  onClick={() => navigate(`/places/${item._id}`)}
                  className="bg-white h-80 rounded-2xl shadow-lg">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-cover rounded-t-2xl"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Desktop Row Scroll */}
        <div className="hidden h-full md:flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-4">
          {cuisines.map((item, index) => (
            <div
            onClick={() => navigate(`/places/${item._id}`)}
              key={index}
              className="min-w-[280px] relative h-full max-w-sm bg-white rounded-3xl shadow-lg snap-center flex-shrink-0"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="h-full w-full object-cover rounded-t-2xl"
              />
              <div className="p-4 absolute bottom-0 left-2 text-white">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cus;
