import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footbar";
import bgImg from "../assets/SIH-IMG.png";
import { TypeAnimation } from 'react-type-animation';
import Fes from "../components/fes/fes";
import Des from "../components/des/des";
import Adv from "../components/adven/adv";
import Cus from "../components/cuisine/cus";
import VideoCarousel from "../components/VideoCarousel";
import SlideBar from "../components/SlideBar";

const Home = () => {
  

  return (
    <div>

    <div class="relative w-full h-screen overflow-hidden">
       

  
    <div class="absolute inset-0 bg-black/50"></div>
        <Navbar />

          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
      <TypeAnimation
        sequence={[
          "Explore Nature & Culture", 
          2000, 
          "Discover Jharkhand's Beauty", 
          2000,
        ]}
        wrapper="span"
        speed={60}
        repeat={Infinity}
        />
       </h1>

      </div>

      <div className="slides ">
         
        <Des mainCategory="Most-Popular-Places"/>
        <SlideBar/>
        <Fes mainCategory="Festivals-Cultural-Events"/>
        <Adv mainCategory="Adventure-Outdoor-Activities"/>
        <Cus mainCategory="Cuisine-Traditional-Food"/>
        {/* <CategoryPage/> */}
       
      </div>

      <Footer/>


    </div>
  );
};

export default Home;
