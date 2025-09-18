import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const ShowAllPlacesPage = () => {
    const [allPlaces, setAllPlaces] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('All')
    const [isLoading, setIsLoading] = useState(true)
    const [hoveredCard, setHoveredCard] = useState(null)

    const navigate = useNavigate();

    const { category } = useParams();
    console.log(category);

    // Simulate loading state for 1 second
    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/api/category/${category}`)
            .then(response => response.json())
            .then(data => setAllPlaces(data))
            .catch(error => console.error('Error fetching places:', error));
    }, [category]);


    //   // Get unique types for filter
    //   const types = ['All', ...new Set(places.map(place => place.type))]


    // // Filter places based on search and type
    //   const filteredPlaces = places.filter(place => {
    //     const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //                          place.desc.toLowerCase().includes(searchTerm.toLowerCase())
    //     const matchesType = selectedType === 'All' || place.type === selectedType
    //     return matchesSearch && matchesType
    //   })

    const PlaceCard = ({ place, index, hoveredCard, setHoveredCard }) => (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:scale-[1.03] hover:-translate-y-2 group"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={place.images[0]} 
          alt={place.name} 
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700 transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-md">
          {category}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-md">
            <svg className="w-4 h-4 text-yellow-400 fill-current transition-transform duration-300 ease-in-out group-hover:scale-110" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            {/* <span className="text-sm font-semibold ml-1">{allPlaces.rating}</span> */}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-green-700">{allPlaces.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 transition-colors duration-300 ease-in-out group-hover:text-gray-700">{allPlaces.description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:scale-105 hover:shadow-lg active:scale-95">
            Explore
          </button>
          <button className="text-gray-400 hover:text-red-500 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:scale-110 active:scale-95">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );


    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10 transition-opacity duration-700 group-hover:from-black/50 group-hover:to-black/30"></div>
                <img
                    src={allPlaces.length > 0 ? allPlaces[0].images[0] : 'https://via.placeholder.com/1500x500?text=Loading...'}
                    alt={category}
                    className="h-full w-full object-cover brightness-75 animate-pulse-slow transition-all duration-1000 ease-out group-hover:brightness-90 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                    <div className="text-center max-w-4xl">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-2xl mb-3 sm:mb-4 animate-fade-in transition-all duration-500 group-hover:scale-105">
                            {category}
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto animate-fade-in-delay transition-all duration-500 group-hover:opacity-100">
                            Discover the natural beauty and adventure that awaits
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hover:animate-none transition-all duration-300 hover:scale-110">
                    <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center transition-all duration-300 hover:border-green-400 hover:shadow-lg">
                        <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse transition-all duration-300 hover:bg-green-400"></div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-5xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 text-center group">
                <div className="animate-fade-in-up transition-all duration-500 group-hover:scale-105">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent transition-all duration-500 group-hover:from-green-500 group-hover:to-green-700">
                        About {category}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg max-w-4xl mx-auto transition-all duration-500 group-hover:text-gray-700">{allPlaces.length > 0 ? allPlaces[0].description : 'Loading...'}</p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="bg-white py-6 sm:py-8 px-4 sm:px-6 shadow-sm">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center sm:text-left">
                            Explore Places ({allPlaces.length})
                        </h2>

                        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                            Search Bar
                            <div className="relative group flex-1">
                                <input
                                    type="text"
                                    placeholder="Search places..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-500 ease-out hover:border-green-400 hover:shadow-md focus:shadow-lg text-sm sm:text-base"
                                />
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-hover:text-green-500 group-focus-within:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            Filter Dropdown
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-500 ease-out hover:border-green-400 hover:shadow-md focus:shadow-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto sm:min-w-[120px]"
                            >
                                {types.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Places Section */}
            <section className="py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {isLoading ? (
                        <div className="flex justify-center items-center py-16 sm:py-20">
                            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-green-500"></div>
                        </div>
                    ) : (
                        <>
                            {/* Mobile Swiper */}
                            <div className="md:hidden">
                                <Swiper
                                    modules={[Pagination, Navigation]}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    spaceBetween={12}
                                    slidesPerView={1.05}
                                    className="pb-8"
                                >
                                    {allPlaces.map((place, index) => (
                                        <SwiperSlide key={index}>
                                            <PlaceCard place={place} index={index} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Desktop Grid */}
                            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {allPlaces.map((place, index) => (
                                    <PlaceCard key={index} place={place} index={index} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                                ))}
                            </div>

                            {allPlaces.length === 0 && (
                                <div className="text-center py-16 sm:py-20">
                                    <div className="text-gray-400 text-4xl sm:text-6xl mb-4">🔍</div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No places found</h3>
                                    <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter criteria</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ShowAllPlacesPage;
