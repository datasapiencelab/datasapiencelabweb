import React from "react";
import ProjectCards from "./projectcard";
const FeaturedProjectCarousel = () => {
  const projects = [
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      buttonText: "Listen",
    },
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      buttonText: "Listen",
    },
    {
      imageSrc:
        "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
      altText: "Album",
      title: "New album is released!",
      description: "Click the button to listen on Spotiwhy app.",
      buttonText: "Listen",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center mt-5 text-5xl font-serif font-extrabold">
        Featured Works
      </div>

      <div className="carousel carousel-center w-full p-4 bg-ghost">
        <div className="carousel-item">
          {projects.map((project) => (
            <ProjectCards key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCarousel;
