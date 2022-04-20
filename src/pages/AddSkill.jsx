import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import SkillForm from "../components/skills/SkillForm";
import NotFound from "./NotFound";

const AddSkill = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? (
    <Layout>
      <main className={layoutClasses.container}>
        <SkillForm />
      </main>
    </Layout>
  ) : (
    <NotFound />
  );
};

export default AddSkill;
