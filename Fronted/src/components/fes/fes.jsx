import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const festivals = [
  {
    name: "Karma Festival",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Karma_Festival_Dance.jpg",
    desc: "A tribal harvest festival with dance & music under the sacred Karma tree.",
  },
  {
    name: "Sarhul",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Sarhul_Festival.jpg",
    desc: "Spring festival with flowers, rituals, and tribal dances.",
  },
  {
    name: "Tusu Festival",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Tusu_Festival.jpg",
    desc: "Harvest festival celebrated with folk songs and cultural performances.",
  },
  {
    name: "Chhath Puja",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Chhath_Puja_Ranchi.jpg",
    desc: "Devotees worship the Sun God with rituals at rivers and ponds.",
  },
];

const Fes = () => {

  
  return (
    <>
     <section id="festivals" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
          Festivals of Jharkhand
        </h2>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={1.05}
          >
            {festivals.map((fest, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={fest.img}
                    alt={fest.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold">{fest.name}</h3>
                    <p className="text-sm mt-1 text-gray-200">{fest.desc}</p>
                    <button className="mt-3 px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                      Explore
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((fest, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={fest.img}
                alt={fest.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold">{fest.name}</h3>
                <p className="text-sm mt-1 text-gray-200">{fest.desc}</p>
                <button className="mt-3 px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Fes;