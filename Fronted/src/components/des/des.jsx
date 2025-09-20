import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';


const Des = ({ mainCategory }) => {

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = mainCategory;
  console.log(category);

  const navigate = useNavigate();

 useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/category/${category}`)
      .then(response => response.json())
      .then(data => {
        setDestinations(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      });
  }, [category]);

  // const handleExploreClick = (id) => {
  //   navigate(`/places/${id}`);
  // };


  
 
  return (
    
      <section id="places" className="bg-gradient-to-b md:h-[110vh] h-[60%] from-green-50 to-green-100 py-12 ">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-green-900 mb-7 md:mb-10">
            Popular Destinations
          </h2>

          

          {/* Mobile Swiper */}
          <div className="md:hidden px-6 h-full">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-green-600">Loading destinations...</div>
              </div>
            ) : (
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={destinations.length > 1 ? {
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  reverseDirection: false,
                } : false}
                speed={6000}
                loop={destinations.length > 1}
                loopedSlides={2}
                spaceBetween={12}
                slidesPerView={1.1}
                allowTouchMove={false}
                freeMode={true}
                freeModeMomentum={false}
              >
                {destinations.map((dest) => (
                  <SwiperSlide key={dest._id}>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                      <img
                        src={dest.images[0]}
                        alt={dest.name}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{dest.name}</h3>
                        <p className="text-sm opacity-90">{dest.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

         <button 
          onClick={() => navigate(`/category/${category}/Show-All-Places`)} 
          className="block relative md:left-[40%] text-[#3b3b3b] hover:text-black mt-5 mb-8 mx-auto bg-transparent border-2 px-6 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:border-green-600"
        >
          <p className="hover:scale-105 relative">View All</p>
        </button>

          {/* Desktop Grid */}
          <div className="hidden h-[78%] md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 ">
            {destinations.slice(0, 3).map((dest) => (
              <div key={dest._id} className="relative h-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer  ">
                <img
                  src={dest.images[0]}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full  object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-sm opacity-90">{dest.description}</p>
                </div>
                <button onClick={() => navigate(`/places/${dest._id}`)} className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
                  Explore
                </button>
              </div>
            ))}
          </div>
         

        </section>
   
  )
}

export default Des;
