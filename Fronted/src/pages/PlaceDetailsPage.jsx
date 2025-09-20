import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlaceDetailsPage = () => {

    const [place, setPlace] = useState(null);

  const { id } = useParams();

  //useEffect to fetch place details using the id
  useEffect(() => {
    fetch(`http://localhost:5000/api/places/${id}`)
      .then(response => response.json())
      .then(data => setPlace(data))
      .catch(error => console.error('Error fetching place details:', error));
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }


  return (
    <div>
       <div className="flex flex-col">
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-[60vh]">
        <img
          src={place.images[0]}
          alt={place.name}
          className="w-full h-full object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>
        <h1 className="absolute bottom-6 left-6 text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          {place.name}
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          About {place.name}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{place.aboutThePlace}</p>
      </div>
    </div>
  
    </div>
  );
};

export default PlaceDetailsPage;

