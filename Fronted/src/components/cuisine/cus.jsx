import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const cuisines = [
    {
      name: "Dhuska",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dhuska_with_Aloo_Curry.jpg",
      desc: "Deep-fried rice & lentil pancakes, usually served with spicy potato curry."
    },
    {
      name: "Chilka Roti",
      img: "https://www.holidify.com/images/cmsuploads/compressed/Chilka_Roti_20191216124929.jpg",
      desc: "A soft roti made from rice flour, paired with vegetables or chutney."
    },
    {
      name: "Rugra",
      img: "https://www.holidify.com/images/cmsuploads/compressed/Rugra_20191216125003.jpg",
      desc: "A rare wild mushroom delicacy, cooked with spices, unique to Jharkhand."
    },
    {
      name: "Handia",
      img: "https://www.holidify.com/images/cmsuploads/compressed/Handia_20191216124959.jpg",
      desc: "A traditional rice beer made by tribal communities, known for its unique taste."
    },
    {
      name: "Tilkut",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tilkut_from_Gaya.jpg",
      desc: "A sweet made of sesame seeds & jaggery, popular during Makar Sankranti."
    }
  ];

const Cus = () => {
  return (
    <div>

<section id="food" className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">
           Cuisine of Jharkhand
        </h2>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={1.15}
          >
            {cuisines.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-48 w-full object-cover rounded-t-2xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Row Scroll */}
        <div className="hidden md:flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-4">
          {cuisines.map((item, index) => (
            <div key={index} className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-lg snap-center flex-shrink-0">
              <img
                src={item.img}
                alt={item.name}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    </div>
  )
}

export default Cus;