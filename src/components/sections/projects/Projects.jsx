import classes from "./Projects.module.css";
import layoutClasses from "../../layout/Layout.module.css";
import Card from "../../ui/Card";

const projectList = [
  {
    id: "project_1",
    title: "Scolaire",
    subtitle: "Time management",
    github: "https://github.com/kudzai-jalos/Scolaire",
    imageUrl: "Frame 1scolaire.png",
    imageAlt: "Scolaire landing screen",
  },
  {
    id: "project_2",
    title: "Online Shop",
    subtitle: "Ecommerce",
    github: "https://github.com/kudzai-jalos/nodejs-first-ecommerce",
    imageUrl: "Online Shop Screenshot.png",
    imageAlt: "Add a product screen",
  },
  {
    id: "project_3",
    title: "Secrets",
    subtitle: "Social",
    github: "https://github.com/kudzai-jalos/wdb-secrets",
    imageUrl: "secrets_screenshot.png",
    imageAlt: "Secrets app landing page",
  },
  {
    id: "project_4",
    title: "Feeds",
    subtitle: "Restful API",
    github: "https://github.com/kudzai-jalos/nodejs-course-restful-api",
    imageUrl: "photo-1558494949-ef010cbdcc31.avif",
    imageAlt: "Server computers",
  },
  {
    id: "project_5",
    title: "Connect 4",
    subtitle: "Puzzle Game",
    github: "https://github.com/kudzai-jalos/su_connect4",
    imageUrl: "connect4_screenshot.png",
    imageAlt: "Graphical User Interface of connect 4 app",
  },
];

const Projects = (props) => {
  const projectsJSX = projectList.map((project) => {
    return (
      <Card key={Math.random().toString()} className={classes.project}>
        <div className={classes.body}>
          <h3 className={classes.title}>{project.title}</h3>
          <p className={classes.subtitle}>{project.subtitle}</p>
        </div>
        <div className={classes["image-container"]}>
          <img src={project.imageUrl} alt={project.imageAlt} />
        </div>
        <div className={classes.actions}>
          <a href={project.github} target="_blank" rel="noreferrer">
            <span>More details</span> <span>&#x2192;</span>
          </a>
        </div>
      </Card>
    );
  });

  return (
    <section
      id="projects"
      className={`${layoutClasses.container} ${classes["container"]}`}
    >
      <h2>Projects</h2>
      <div className={classes.projects}>{projectsJSX}</div>
    </section>
  );
};

export default Projects;
