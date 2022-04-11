import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import ProjectForm from "../components/projects/ProjectForm";

const EditProject = (props) => {
  const {projectId} = useParams();

  return (
    <Layout>
      <main className={layoutClasses.container}>
        <ProjectForm isEditing={props.isEditing} projectId={projectId} />
      </main>
    </Layout>
  );
}

export default EditProject;