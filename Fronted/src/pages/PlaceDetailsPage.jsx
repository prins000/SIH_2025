import React, { use, useEffect, useState } from "react";
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
      <h1>Place Details: {place.name}</h1>
        <p>{place.description}</p>
        <img src={place.image} alt={place.name} style={{ width: '300px', height: '200px' }} />
        <p>Location: {place.location}</p>
        <p>Category: {place.category}</p>
        <p>Rating: {place.rating}</p>   
    </div>
  );
};

export default PlaceDetailsPage;

