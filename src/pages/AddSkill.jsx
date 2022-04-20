import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import SkillForm from "../components/skills/SkillForm";
import useIsAuth from "../hooks/use-is-auth";

const AddSkill = (props) => {
  useIsAuth();
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <SkillForm />
      </main>
    </Layout>
  );
};

export default AddSkill;
