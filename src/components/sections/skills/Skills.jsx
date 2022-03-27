import Card from "../../ui/Card";
import techstack from "@shiroi-shi/techstack";
import classes from "./Skills.module.css";
import layoutClasses from "../../layout/Layout.module.css";

const skillList = [
  {
    name: "React",
    familiarity: 7,
  },
  {
    name: "Node.js",
    familiarity: 7,
  },
  {
    name: "Redux",
    familiarity: 7,
  },
  {
    name: "MongoDB",
    familiarity: 7,
  },
  {
    name: "ExpressJS",
    familiarity: 7,
  },
  {
    name: "JavaScript",
    familiarity: 7,
  },
  {
    name: "HTML5",
    familiarity: 7,
  },
  {
    name: "CSS 3",
    familiarity: 7,
  },
  {
    name: "Java",
    familiarity: 7,
  },
  {
    name: "Python",
    familiarity: 7,
  },
  {
    name: "Next.js",
    familiarity: 7,
  },
  {
    name: "TypeScript",
    familiarity: 7,
  },
  {
    name: "Mocha",
    familiarity: 7,
  },

];

const techList = techstack.all;
const Skills = (props) => {
  const skillsListJSX = skillList.map((skill) => {
    const tech = techList.find((t) => t.name === skill.name);
    // console.log(tech)
    return (
      <li key={tech.slug} className={classes.skill}>
        <Card  className={classes["skill-content"]}>
          <p>{tech.name}</p>
          <img src={tech.logo} alt={tech.name + " logo"} />
        </Card>
      </li>
    );
  });

  return (
    <section id="skills" className={`${layoutClasses.container} ${classes.container}`}>
      <h2>Skills</h2>
      {/* <ul>
        React.js - Node.js - Redux - MongoDB - SQL - Sequelize.js - Mongoose -
        Express - HTML5 - CSS - JavaScript - Java - Next.js - Python -
        Typescript - Deno - Oak - Mocha
      </ul> */}
      <ul className={classes.skills}>
        {skillsListJSX}
      </ul>
    </section>
  );
};

export default Skills;
