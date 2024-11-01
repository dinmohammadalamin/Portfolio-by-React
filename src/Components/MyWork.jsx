import React from "react";
import { Link } from "react-router-dom";

const MyWork = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of this project and its main features.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
      githubLink: "https://github.com/username/project-one",
      liveLink: "https://live-site-link.com/project-one",
    },
    {
      title: "Project Two",
      description: "A brief description of this project and its main features.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
      githubLink: "https://github.com/username/project-two",
      liveLink: "https://live-site-link.com/project-two",
    },
    // Add more projects as needed
    {
      title: "Project Three",
      description: "A brief description of this project and its main features.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
      githubLink: "https://github.com/username/project-two",
      liveLink: "https://live-site-link.com/project-two",
    },
    // Add more projects as needed
    {
      title: "Project four",
      description: "A brief description of this project and its main features.",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
      githubLink: "https://github.com/username/project-two",
      liveLink: "https://live-site-link.com/project-two",
    },
    // Add more projects as needed
  ];
  return (
    <div className="text-white py-12 px-4 lg:p-20">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-600">PORTFOLIO</h1>
          <div className="border-b-4 border-orange-600 w-24 mx-auto mt-2"></div>
        </div>
        <h1 className="text-4xl font-semibold mb-4">Explore My Projects</h1>
        <p className="text-gray-300">Here are some of the projects I've worked on, showcasing my skills and expertise. You can view the code on GitHub or explore the live versions.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-500 font-semibold transition">
                  GitHub
                </Link>
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-500 font-semibold transition">
                  Live Site
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
