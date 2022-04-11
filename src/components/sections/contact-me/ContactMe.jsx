import classes from "./ContactMe.module.css";
import layoutClasses from "../../layout/Layout.module.css";
import inputClasses from "../../ui/Input.module.css";
import btnClasses from "../../ui/Button.module.css";

import useHttp from "../../../hooks/use-http";
import { useEffect, useReducer } from "react";
import Errors from "../../ui/Errors";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const SET_NAME = "SET_NAME";
const SET_EMAIL = "SET_EMAIL";
const SET_MESSAGE = "SET_MESSAGE";

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

const ContactMe = (props) => {
  const { data, error, isLoading, sendRequest } = useHttp();
  const [contactFormState, dispatch] = useReducer(contactFormReducer, {
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  useEffect(()=>{
    if (data && !error && !isLoading) {
      navigate("/action/success",{
        message:"Message sent successfully",
        actions:[
          {
            label:"Go back to home page",
            path:"/"
          }
        ]
      })
    }
  },[data, error, isLoading, navigate])

  const handleNameChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    dispatch({
      type: SET_NAME,
      name: value,
    });
  };

  const handleEmailChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    dispatch({
      type: SET_EMAIL,
      email: value,
    });
  };

  const handleMessageChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    dispatch({
      type: SET_MESSAGE,
      message: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // UX Validation

    await sendRequest("http://localhost:8000/contact-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: contactFormState,
    });
  };

  return (
    <footer
      id="contact-me"
      className={`${layoutClasses.container} ${classes["container"]}`}
    >
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit} className={classes["contact-form"]}>
        <Errors error={error} />
        <div className={inputClasses["form-control"]}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={contactFormState.name}
            onChange={handleNameChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={contactFormState.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="message">Message</label>
          <textarea
            rows={10}
            name="message"
            id="message"
            onChange={handleMessageChange}
            value={contactFormState.message}
          ></textarea>
        </div>
        <div className={classes["form-actions"]}>
          <button className={btnClasses.btn} type="submit">
            Send message
          </button>
          {isLoading && (
            <span>
              <LoadingSpinner className={classes.spinner} />
            </span>
          )}
        </div>
      </form>
      <div className={classes["contact-details"]}>
        <h3>Contact details</h3>
        <div className={classes["contact-info"]}>
          <div className={classes["detail"]}>
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
            </svg>
            <a href="mailto:kudzai.jalos@younglings.africa">
              kudzai.jalos@younglings.africa
            </a>
          </div>
          <div className={classes["detail"]}>
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
            </svg>
            <a href="tel:+27683737143">+27 68 373 7143</a>
          </div>
          <div className={classes["detail"]}>
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <a
              href="https://linkedin.com/in/kudzai-jalos"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={classes["detail"]}>
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <a
              href="http://github.com/kudzai-jalos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className={classes["detail"]}>
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
            </svg>
            <div>
              <p>Cape Town</p>
              <p>South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
