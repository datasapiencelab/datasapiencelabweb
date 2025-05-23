import React from "react";
import backgroundImage from "/public/backgroundhome.webp";

const HomePageHeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content rounded-3xl glass">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-bold font-serif text-primary">Data Sapience Lab</h1>
          <p className="mb-5 text-2xl text-slate-800">Providing world class data solutions for you.</p>
          <button className="btn btn-primary border-secondary hover:border-accent hover:shadow-accent hover:shadow-lg hover:text-accent">
            Our Works
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default HomePageHeroSection;
