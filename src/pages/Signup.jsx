import { useEffect } from "react";
import Auth from "../components/auth/Auth";

const Signup = () => {
  useEffect(() => {
    document.title = "Sign up" ;

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return <Auth isSignup />;
};

export default Signup;
