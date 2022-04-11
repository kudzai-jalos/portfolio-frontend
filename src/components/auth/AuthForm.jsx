import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import inputClasses from "../ui/Input.module.css";
import buttonClasses from "../ui/Button.module.css";
import classes from "./AuthForm.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/authSlice";
import Errors from "../ui/Errors";
import LoadingSpinner from "../ui/LoadingSpinner";

const AuthForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const { sendRequest, data, error, isLoading } = useHttp();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      if (props.isSignup) {
        navigate("/action/success", {
          state: {
            message: "Sign up successful. Account awaiting verification.",
            actions: [
              {
                label: "Go to Login page",
                path: "/auth/login",
              },
            ],
          },
        });
      } else {
        // TODO store token
        const token = data.token;
        dispatch(login(token));
        setTimeout(() => {
          console.log("Session expired. Logging out...");
          dispatch(logout());
        }, 1000 * 60 * 60);
        navigate("/");
      }
    }
  }, [data, dispatch, navigate, props.isSignup]);

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO validation
    if (props.isSignup) {
      sendRequest("http://localhost:8000/auth/signup", {
        method: "POST",
        body: {
          email: enteredEmail,
          password: enteredPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      sendRequest("http://localhost:8000/auth/login", {
        method: "POST",
        body: {
          email: enteredEmail,
          password: enteredPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then(result=>{
        console.log("RESOLVED",result)
      }).catch(err=>{
        console.log("REJECTED",err);
      });
    }
  };

  return (
    <>
      <h1 className={classes["page-title"]}>
        {props.isSignup ? "Sign up" : "Login"}
      </h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Errors error={error} />
        <div className={inputClasses["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={enteredEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={`${inputClasses["form-actions"]} ${classes.actions}`}>
          <NavLink
            className={`${buttonClasses.btn}`}
            to={props.isSignup ? "/auth/login" : "/auth/signup"}
          >
            {props.isSignup ? "Go to Login" : "Create a new account"}
          </NavLink>
          <button className={`${buttonClasses["btn-alt"]}`} type="submit">
            {props.isSignup ? "Sign up" : "Login"}
          </button>
        </div>
        {isLoading && (
          <div className={classes.spinner}>
            <LoadingSpinner />
          </div>
        )}
      </form>
    </>
  );
};

export default AuthForm;
