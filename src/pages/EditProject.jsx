import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import ProjectForm from "../components/projects/ProjectForm";
import NotFound from "./NotFound";

const EditProject = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { projectId } = useParams();

  return isAuth ? (
    <Layout>
      <main className={layoutClasses.container}>
        <ProjectForm isEditing={props.isEditing} projectId={projectId} />
      </main>
    </Layout>
  ) : (
    <NotFound />
  );
};

export default EditProject;
