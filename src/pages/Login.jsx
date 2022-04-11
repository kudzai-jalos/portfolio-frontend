import { useEffect } from "react";
import Auth from "../components/auth/Auth";

const Login = () => {
  useEffect(() => {
    document.title = "Login";

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return <Auth />;
};

export default Login;
