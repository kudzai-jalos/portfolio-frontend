import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import ProjectList from "../components/projects/ProjectList";
import classes from "../components/sections/projects/Projects.module.css";

const AdminProjects = (props) => {
  return (
    <Layout>
      <main className={`${layoutClasses.container} ${classes.container}`}>
        <h1>Admin projects</h1>
        <ProjectList isAdmin />
      </main>
    </Layout>
  );
};

export default AdminProjects;
