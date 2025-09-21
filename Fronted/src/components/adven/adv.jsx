import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Adv = ({ mainCategory }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [adventurePlaces, setAdventurePlaces] = useState([]);

  const category = mainCategory;

  useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:5000/api/category/${category}`)
        .then(response => response.json())
        .then(data => {
          setAdventurePlaces(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching destinations:', error);
          setLoading(false);
        });
    }, [category]);


  useEffect(() => {
    // Simulate loading time for adventure places
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <section id="adventure" className="py-16  bg-[#ffedcb]">
      <div className="max-w-7xl h-[60%] mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-yellow-800 mb-12">
           Adventure & Eco-Tourism
        </h2>

       

        {/* Mobile Swiper */}
        <div className="md:hidden h-full">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-green-600">Loading adventure places...</div>
            </div>
          ) : (
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={adventurePlaces.length > 1 ? {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
              } : false}
              speed={6000}
              loop={adventurePlaces.length > 1}
              loopedSlides={2}
              spaceBetween={12}
              slidesPerView={1.05}
              allowTouchMove={false}
              freeMode={true}
              freeModeMomentum={false}
            >
              {adventurePlaces.map((place, index) => (
                <SwiperSlide key={index}>
                  <div
                   onClick={() => navigate(`/places/${place._id}`)}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={place.images[0]}
                      alt={place.name}
                      className="h-full64 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                      <p className="text-sm opacity-90">{place.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        
        <button 
          onClick={() => navigate(`/category/${category}/Show-All-Places`)} 
          className="block relative md:left-[45%] text-[#3b3b3b] hover:text-black mt-4 mb-8 mx-auto bg-transparent border-2 px-6 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:border-green-600"
        >
          <p className="hover:scale-105 relative">View All</p>
        </button>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {adventurePlaces.map((place, index) => (
            <div key={index} className=" group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={place.images[0]}
                alt={place.name}
                className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                <p className="text-sm opacity-90">{place.desc}</p>
              </div>
               <div 
                onClick={() => navigate(`/places/${place._id}`)}
                className="absolute right-4 bottom-3 text-white text-xl bg-amber-500 rounded-lg px-4 py-1.5 translate-y-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 transition-all duration-300" 
                ><p>Visit</p></div>
            </div>

           
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Adv;
