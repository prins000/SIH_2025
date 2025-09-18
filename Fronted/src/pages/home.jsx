import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footbar";
import bgImg from "../assets/SIH-IMG.png";
import { TypeAnimation } from 'react-type-animation';
import Fes from "../components/fes/Fes";
import Des from "../components/des/Des";
import Adv from "../components/adven/Adv";
import Cus from "../components/cuisine/Cus";
import CategoryPage from "./categoryPage";
import VideoCarousel from "../components/VideoCarousel";

const Home = () => {
  

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
        <Fes />
        <Adv/>
        <Cus/>
        {/* <CategoryPage/> */}
        <VideoCarousel/>
      </div>

      <Footer/>


    </div>
  );
};

export default Home;
