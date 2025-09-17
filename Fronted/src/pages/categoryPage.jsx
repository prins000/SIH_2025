import React from 'react'
import Footer from '../components/footbar'


const CategoryPage = ({ 
  categoryName = "Eco Tourism", 
  categoryImg = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lodh_Falls.jpg", 
  intro = "Jharkhand offers breathtaking eco-tourism opportunities with lush forests, waterfalls, wildlife sanctuaries, and serene landscapes. It’s a perfect retreat for nature lovers and adventure seekers.", 
  places = [
    {
      name: "Palamau Tiger Reserve",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Tiger_in_Palamau.jpg",
      desc: "Home to tigers, leopards, and rich biodiversity in the dense forests of Jharkhand."
    },
    {
      name: "Udhwa Bird Sanctuary",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Bird_sanctuary.jpg",
      desc: "A paradise for bird watchers with migratory and rare bird species."
    },
    {
      name: "Lodh Falls (Burha Ghagh)",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lodh_Falls.jpg",
      desc: "One of the highest waterfalls in Jharkhand, surrounded by lush greenery."
    }
  ]
}) => {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img 
          src={categoryImg} 
          alt={categoryName} 
          className="h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            {categoryName}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About {categoryName}</h2>
        <p className="text-gray-600 leading-relaxed">{intro}</p>
      </section>

      {/* Popular Places */}
      <section className="bg-green-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Popular Places in {categoryName}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={place.img} 
                    alt={place.name} 
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-600 text-sm">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CategoryPage;
// export default CategoryPage;
