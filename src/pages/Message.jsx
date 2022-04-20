import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import buttonClasses from "../components/ui/Button.module.css";
import classes from "./Message.module.css"

const Message = (props) => {
  const { state } = useLocation();
  const { message, actions } = state;

  useEffect(() => {
    document.title = "Message";

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Layout>
      <main className={layoutClasses.container}>
        <h1 className={classes.heading}>{message}</h1>
        <div className={classes.actions}>
          {actions.map((action) => {
            return (
              <NavLink
                key={action.path}
                className={`${buttonClasses.btn} ${buttonClasses.mr}`}
                to={action.path}
              >
                {action.label}
              </NavLink>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Message;
