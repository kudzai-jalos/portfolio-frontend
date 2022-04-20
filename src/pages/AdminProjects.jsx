import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import ProjectList from "../components/projects/ProjectList";
import classes from "../components/sections/projects/Projects.module.css";
import NotFound from "./NotFound";

const AdminProjects = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
      isAuth ? (
        <Layout>
          <main className={`${layoutClasses.container} ${classes.container}`}>
            <h1>Admin projects</h1>
            <ProjectList isAdmin />
          </main>
        </Layout>
      ) : (
        <NotFound />
      )
  );
};

export default AdminProjects;
