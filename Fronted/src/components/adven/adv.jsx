import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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


  return (
    <div>
        <section id="adventure" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
           Adventure & Eco-Tourism
        </h2>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={1.05}
          >
            {adventurePlaces.map((place, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="h-64 w-full object-cover"
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
        </div>

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
