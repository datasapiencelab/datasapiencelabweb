import React from "react";

const ProjectCards = ({ project }) => {
  return (
    <div className="card bg-black shadow-lg hover:shadow-gray-700 lg:card-side m-5 hover:scale-105 transition duration-300 ease-in-out">
      <figure>
        <img loading="lazy" src={project.imageSrc} alt={project.altText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary hover:btn-secondary">
                {project.buttonText}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
