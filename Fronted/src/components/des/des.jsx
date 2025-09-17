import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const destinations = [
  {
    name: "Hundru Falls",
    desc: "Majestic waterfall near Ranchi",
    img: "/places/hundru.jpg",
  },
  {
    name: "Betla National Park",
    desc: "Wildlife & eco tourism",
    img: "/places/betla.jpg",
  },
  {
    name: "Netarhat Hills",
    desc: "Known as the 'Queen of Chotanagpur'",
    img: "/places/netarhat.jpg",
  },
  {
    name: "Baidyanath Temple",
    desc: "Famous Jyotirlinga in Deoghar",
    img: "/places/baidyanath.jpg",
  },
  {
    name: "Dassam Falls",
    desc: "Scenic waterfall near Taimara",
    img: "/places/dassam.jpg",
  },
  {
    name: "Patratu Valley",
    desc: "Picturesque road trip destination",
    img: "/places/patratu.jpg",
  },
];

const des = () => {
 
  return (
    <div>
      <section id="places" className="bg-gradient-to-b from-green-50 to-green-100 py-12">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
            Popular Destinations in Jharkhand
          </h2>
          {/* Mobile Swiper */}
          <div className="md:hidden px-6">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={12}
              slidesPerView={1.1}
            >
              {destinations.map((dest, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{dest.name}</h3>
                      <p className="text-sm opacity-90">{dest.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
            {destinations.map((dest, i) => (
              <div key={i} className="relative h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-sm opacity-90">{dest.desc}</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default des
