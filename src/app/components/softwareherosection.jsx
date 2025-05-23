import React from "react";
import backgroundImage from "/public/analyticsbg.webp";
import backgroundImageMobile from "/public/backgroundaiml2.webp";

const SoftwareHeroSection = () => {
  return (
    <div
      style={{
        "--image-url": `url(${backgroundImage.src})`,
        "--image-url-mobile": `url(${backgroundImageMobile.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-screen flex bg-[image:var(--image-url-mobile)] md:bg-[image:var(--image-url)]"
    >
      <div className="hero-content text-left flex-column lg:flex-row-reverse">
        <div className="max-w-lg pl-10 bg-base-100 p-5 rounded-xl bg-opacity-90 md:bg-base-200 md:bg-opacity-80 hover:bg-opacity-90 duration-300 transition ease-in-out">
          <h1 className="text-5xl font-bold rounded">
            <span className="text-secondary">Websites </span>
            <span className="text-ghost">&amp;</span>
            <br />
            <span className="text-accent">Mobile Apps</span>
          </h1>
          <p className="py-6 text-lg rounded">
            SEO friendly, fully responsive, pixel perfect and high speed. No matter the platform, we have you covered.
          </p>
          <button className="btn btn-base btn-outline rounded-full">
            Learn more
          </button>
          <button className="btn btn-secondary btn-outline rounded-full ml-5">
            Build your product 
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareHeroSection;
