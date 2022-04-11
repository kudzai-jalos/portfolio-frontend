import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import ProjectForm from "../components/projects/ProjectForm";

const EditProject = (props) => {
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <ProjectForm isEditing={props.isEditing} />
      </main>
    </Layout>
  );
}

export default EditProject;