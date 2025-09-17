import React from "react";
import Navbar from "../components/navbar";
import bgImg from "../assets/SIH-IMG.png";
import { TypeAnimation } from 'react-type-animation';
import Placecategoryslider from "../components/Placecategoryslider";

const home = () => {
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


  return (
    <div>

      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="relative  "
      >
        <Navbar />

          <h1 className="text-white text-6xl absolute top-[50%] left-[30%]">
      <TypeAnimation
        sequence={[
          "Explore Nature & Culture", 
          2000, 
          "Discover Jharkhand's Beauty", 
          2000,
        ]}
        wrapper="span"
        speed={70}
        repeat={Infinity}
      />
    </h1>

      </div>

      <div className="slides ">
        <section className="bg-gradient-to-b from-green-50 to-green-100 py-12">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
            Popular Destinations in Jharkhand
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="relative h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
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

         <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
          Festivals of Jharkhand
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((fest, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
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

      <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
           Adventure & Eco-Tourism
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {adventurePlaces.map((place, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
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


        <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">
           Cuisine of Jharkhand
        </h2>

        <div className="food  flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-4">
          {cuisines.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-lg snap-center flex-shrink-0"
            >
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

      <Placecategoryslider />

    </div>
  );
};

export default home;
