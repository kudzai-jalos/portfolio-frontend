import classes from "./Projects.module.css";
import layoutClasses from "../../layout/Layout.module.css";
import Card from "../../ui/Card";
import useHttp from "../../../hooks/use-http";
import { useEffect, useState } from "react";
import ProjectItem from "../../projects/ProjectItem";
import { NavLink } from "react-router-dom";
import ProjectList from "../../projects/ProjectList";

// const projectList = [
//   {
//     id: "project_1",
//     title: "Scolaire",
//     subtitle: "Time management",
//     github: "https://github.com/kudzai-jalos/Scolaire",
//     imageUrl: "Frame 1scolaire.png",
//     imageAlt: "Scolaire landing screen",
//   },
//   {
//     id: "project_2",
//     title: "Online Shop",
//     subtitle: "Ecommerce",
//     github: "https://github.com/kudzai-jalos/nodejs-first-ecommerce",
//     imageUrl: "Online Shop Screenshot.png",
//     imageAlt: "Add a product screen",
//   },
//   {
//     id: "project_3",
//     title: "Secrets",
//     subtitle: "Social",
//     github: "https://github.com/kudzai-jalos/wdb-secrets",
//     imageUrl: "secrets_screenshot.png",
//     imageAlt: "Secrets app landing page",
//   },
//   {
//     id: "project_4",
//     title: "Feeds",
//     subtitle: "Restful API",
//     github: "https://github.com/kudzai-jalos/nodejs-course-restful-api",
//     imageUrl: "photo-1558494949-ef010cbdcc31.avif",
//     imageAlt: "Server computers",
//   },
//   {
//     id: "project_5",
//     title: "Connect 4",
//     subtitle: "Puzzle Game",
//     github: "https://github.com/kudzai-jalos/su_connect4",
//     imageUrl: "connect4_screenshot.png",
//     imageAlt: "Graphical User Interface of connect 4 app",
//   },
// ];

const Projects = (props) => {
  
  return (
    <section
      id="projects"
      className={`${layoutClasses.container} ${classes["container"]}`}
    >
      <h2>Projects</h2>
      <ProjectList />
    </section>
  );
};

export default Projects;
