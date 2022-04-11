import classes from "./Skills.module.css";
import layoutClasses from "../../layout/Layout.module.css";
import SkillList from "../../skills/SkillList";

const Skills = (props) => {

  return (
    <section id="skills" className={`${layoutClasses.container} ${classes.container}`}>
      <h2>Skills</h2>
      <SkillList />
    </section>
  );
};

export default Skills;
