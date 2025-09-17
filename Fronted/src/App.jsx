// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from  "./pages/home"
import PlaceDetailsPage from './pages/PlaceDetailsPage';
import ShowAllPlacesPage from './pages/ShowAllPlacesPage';



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/places/:id" element={<PlaceDetailsPage />} />
      <Route path="/category/Most-Popular-Places/Show-All-Places" element={<ShowAllPlacesPage />} />
    </Routes>
  );
};

export default App;
