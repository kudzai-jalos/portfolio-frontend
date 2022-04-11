import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import SkillForm from "../components/skills/SkillForm";

const AddSkill = (props) => {
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <SkillForm />
      </main>
    </Layout>
  );
};

export default AddSkill;
