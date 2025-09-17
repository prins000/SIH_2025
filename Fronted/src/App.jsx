// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from  "./pages/home"
import PlaceDetailsPage from './pages/PlaceDetailsPage';



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/places/:id" element={<PlaceDetailsPage />} />
    </Routes>
  );
};

export default App;
