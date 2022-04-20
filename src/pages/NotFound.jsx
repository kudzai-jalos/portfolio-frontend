import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import buttonClasses from "../components/ui/Button.module.css";
import classes from "./Message.module.css";

const NotFound = () => {
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <h1>Page not found.</h1>
        <div className={classes.actions}>
          <NavLink
            className={`${buttonClasses.btn} ${buttonClasses.mr}`}
            to={"/"}
          >
            Go to home page
          </NavLink>
        </div>
      </main>
    </Layout>
  );
};

export default NotFound;
