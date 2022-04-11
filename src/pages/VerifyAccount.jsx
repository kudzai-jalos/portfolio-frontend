import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import layoutClasses from "../components/layout/Layout.module.css";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";

const VerifyAccount = () => {
  const { sendRequest, data, error } = useHttp();
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/action/success", {
        message: "Verifying account successful.",
        actions: [
          {
            label: "Go to login page",
            path: "/auth/login",
          },
        ],
      });
    }
    if (error) {
      navigate("/action/failure", {
        message: "Verifying account failed. Please contact admin.",
        actions: [
          {
            label: "Go to home page",
            path: "/",
          },
        ],
      });
    }
  }, [data, error, navigate]);

  useEffect(() => {
    sendRequest("https://kudzai-jalos-api.herokuapp.com/auth/accounts/verify", {
      method: "POST",
      body: {
        token,
      },
    });
  }, [sendRequest, token]);

  return (
    <main className={layoutClasses.container}>
      <h1 className="center">Verifying Account. Please wait...</h1>
      <LoadingSpinner />
    </main>
  );
};

export default VerifyAccount;
