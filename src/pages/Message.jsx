import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";
import buttonClasses from "../components/ui/Button.module.css";

const Message = (props) => {
  const { state } = useLocation();
  const { message, actions } = state;
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <h1>{message}</h1>
        <div className="actions">
          {actions.map((action) => {
            return (
              <NavLink key={action.path} className={buttonClasses.btn} to={action.path}>
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
