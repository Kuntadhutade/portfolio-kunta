

import React from "react";
import movieAppImg from "../assets/imdb-movie-app-new.png";
import bookStoreImg from "../assets/sell-book.png";

const Projects = () => {
  const projectData = [
    {
      title: "Personal Portfolio Website",
    //   img: portfolioImg,
      description:
        "A responsive portfolio site built using HTML, CSS, Bootstrap, JavaScript & React.js.",
      technologies: "HTML, CSS, Bootstrap, JavaScript & React.js",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Movie App",
      img: movieAppImg,
      description:
        "A React-based movie browsing app using TMDB API. Includes search and favorite features.",
      technologies: "React.js, API, Bootstrap, JavaScript",
      liveLink: "https://your-live-demo-link.com",
      codeLink: "https://github.com/Kuntadhutade/React-project",
    },
    {
      title: "Book Store Application",
      img: bookStoreImg,
      description:
        "An online bookstore app with admin panel for managing books and users.",
      technologies: "PHP, MySQL, HTML, Bootstrap, React.js",
      liveLink: "https://your-bookstore-demo-link.com",
      codeLink: "https://github.com/Kuntadhutade/college-buddy-FEP",
    },
  ];

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: "#1e1e1e" }}>
      <div className="container text-white">
        <h2 className="text-center mb-5 text-aqua">My Projects</h2>
        <div className="row g-4">
          {projectData.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card h-100 bg-dark text-white border-0 shadow-sm">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-aqua">{project.title}</h5>
                  <p>{project.description}</p>
                  <p>
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                  <a
                    href={project.liveLink}
                    className="btn btn-outline-info btn-sm me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="btn btn-outline-light btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


