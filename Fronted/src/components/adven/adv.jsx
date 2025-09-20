import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';



const adventurePlaces = [
  {
    name: "Palamau Tiger Reserve",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Betla_National_Park_Jharkhand.jpg",
    desc: "One of India’s first tiger reserves, home to tigers, leopards, elephants, and rich wilderness."
  },
  {
    name: "Udhwa Bird Sanctuary",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Openbill_stork_udhuwa_jharkhand.jpg",
    desc: "Jharkhand’s only bird sanctuary, famous for migratory birds and serene lakes."
  },
  {
    name: "Lodh Falls (Burha Ghagh)",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Lodh_Falls_Jharkhand.jpg",
    desc: "The highest waterfall in Jharkhand, surrounded by forests and adventurous trekking trails."
  },
  {
    name: "Kiriburu & Meghahatuburu",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kiriburu_Mines_View_Jharkhand.jpg",
    desc: "Twin hill stations offering panoramic forest views and a cool climate perfect for eco-tourism."
  },
  {
    name: "Hundru Falls",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Hundru_Falls_Jharkhand.jpg",
    desc: "A spectacular 320 ft waterfall, ideal for trekking, photography and picnics."
  },
  {
    name: "Topchanchi Lake",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Topchanchi_lake.jpg",
    desc: "A peaceful lake surrounded by forests, famous for boating and eco-tourism."
  }
];

const Adv = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
        <section id="adventure" className="py-16 from-green-50 to-green-100">
      <div className="max-w-7xl h-[60%] mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-green-800 mb-12">
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
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={place.img}
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
          onClick={() => navigate('/adventure')} 
          className="block relative md:left-[45%] text-[#3b3b3b] hover:text-black mt-4 mb-8 mx-auto bg-transparent border-2 px-6 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:border-green-600"
        >
          <p className="hover:scale-105 relative">View All</p>
        </button>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {adventurePlaces.map((place, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={place.img}
                alt={place.name}
                className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                <p className="text-sm opacity-90">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Adv;
