import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Footer from "../components/footbar";
import "swiper/css";
import "swiper/css/pagination";

const PlaceDetailsPage = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/places/${id}`)
      .then((res) => res.json())
      .then((data) => setPlace(data))
      .catch((err) => console.error("Error fetching place details:", err));
  }, [id]);

  if (!place) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <img
          src={place.images[0]}
          alt={place.name}
          className="w-full h-full object-cover rounded-b-2xl md:rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-2xl md:rounded-b-3xl"></div>
        <h1 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          {place.name}
        </h1>
      </div>

      {/* Image Gallery Slider */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={15}
          slidesPerView={1}
          className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
        >
          {place.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${place.name} ${index}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
          About the {place.name}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          {place.aboutThePlace}
        </p>
      </section>

      {/* History Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
          History
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          {place.history}
        </p>
      </section>

      {/* Visiting Info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 sm:p-6 rounded-2xl shadow-md">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Visiting Hours
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            {place.visitingHours}
          </p>
        </div>
        <div className="bg-green-50 p-4 sm:p-6 rounded-2xl shadow-md">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Best Time to Visit
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            {place.bestTimeToVisit}
          </p>
        </div>
      </section>

      
         {/* Popular For & Location Side by Side */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-24">
        {/* Popular Activities */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
            Popular For
          </h2>
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            {place.popularFor.map((activity, index) => (
              <li
                key={index}
                className="bg-green-100 text-green-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base font-medium"
              >
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
            Location
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">{place.location}</p>
        </div>
      </section>
    
        <Footer />
      
    </div>
  );
};

export default PlaceDetailsPage;

