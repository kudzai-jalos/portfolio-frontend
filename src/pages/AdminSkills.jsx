import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import classes from "../components/sections/skills/Skills.module.css";
import SkillList from "../components/skills/SkillList";
import NotFound from "./NotFound";

const AdminSkills = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? (
    <Layout>
      <main className={`${layoutClasses.container} ${classes.container}`}>
        <h1>Admin skills</h1>
        <SkillList isAdmin />
      </main>
    </Layout>
  ) : (
    <NotFound />
  );
};

export default AdminSkills;
