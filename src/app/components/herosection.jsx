import React from "react";
import backgroundImage from "/public/databackground2.jpg";

const HomePageHeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
        `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Data Sapience Lab</h1>
          <p className="mb-5">
            Providing world class data solutions for you.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeroSection