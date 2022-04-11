import Layout from "../layout/Layout";
import layoutClasses from "../layout/Layout.module.css";
import AuthForm from "./AuthForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/", {
        state: {
          message: "Route blocked because user is already logged in.",
        },
      });
    }

    return () => {
      window.scrollTo(0, 0);
    };
  }, [isAuth, navigate]);

  return (
    <Layout>
      <main className={layoutClasses.container}>
        <AuthForm isSignup={props.isSignup} />
      </main>
    </Layout>
  );
};

export default Auth;
