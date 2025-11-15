import React from "react";
import ProjectCard from "./ProjectCard";
import banner1 from "../../assets/chef_claude.png";
import banner2 from "../../assets/layoff.png";
import banner3 from "../../assets/basics.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects  :)</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          image={banner1}
          title="Chef Claude"
          main="Provides awesome recipes based on ingredients you have at home. Built with React for the frontend and will be deployed soon."
        />

        <ProjectCard
          image={banner2}
          title="Employee Layoff Predictor"
          main="A machine learning model that predicts potential employee layoffs based on various factors like company performance, market trends, and employee data."
        />

        <ProjectCard
          image={banner3}
          title="Basic HTML CSS JS Website"
          main="A simple and responsive website built using HTML, CSS, and JavaScript to showcase my web development skills and projects."
        />
      </div>
    </div>
  );
};

export default Projects;
