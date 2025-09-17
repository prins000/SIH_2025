import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowAllPlacesPage = () => {
  const [allPlaces, setAllPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/category/Most-Popular-Places')
      .then(response => response.json())
      .then(data => setAllPlaces(data))
      .catch(error => console.error('Error fetching places:', error));
  }, []);

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-12">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
        All Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {allPlaces.map((dest) => (
          <div
            key={dest._id}
            className="relative h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{dest.name}</h3>
              <p className="text-sm opacity-90">{dest.description}</p>
            </div>
            <button
              onClick={() => navigate(`/places/${dest._id}`)}
              className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition"
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowAllPlacesPage;
