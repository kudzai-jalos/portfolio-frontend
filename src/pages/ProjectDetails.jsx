import ProjectDetailsContent from "../components/projects/ProjectDetails";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
  const params = useParams();
  const { projectId } = params;
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <ProjectDetailsContent id={projectId} />
      </main>
    </Layout>
  );
};

export default ProjectDetails;
