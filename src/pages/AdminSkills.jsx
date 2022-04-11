import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import classes from "../components/sections/skills/Skills.module.css";
import SkillList from "../components/skills/SkillList";

const AdminSkills = (props) => {
  return (
    <Layout>
      <main className={`${layoutClasses.container} ${classes.container}`}>
        <h1>Admin skills</h1>
        <SkillList isAdmin />
      </main>
    </Layout>
  );
};

export default AdminSkills;