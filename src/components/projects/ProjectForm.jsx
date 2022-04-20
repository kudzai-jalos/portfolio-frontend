import { useEffect, useReducer, useState } from "react";
import useHttp from "../../hooks/use-http";
import inputClasses from "../ui/Input.module.css";
import buttonClasses from "../ui/Button.module.css";
import classes from "./ProjectForm.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Errors from "../ui/Errors";
import LoadingSpinner from "../ui/LoadingSpinner";

const SET_TITLE = "SET_TITLE";
const SET_DESCRIPTION = "SET_DESCRIPTION";
const SET_IMAGE_URL = "SET_IMAGE_URL";
const SET_GITHUB = "SET_GITHUB";
const SET_LIVE_URL = "SET_LIVE_URL";

const FETCH_PROJECT = "FETCH_PROJECT";
const SUBMIT_PROJECT = "SUBMIT_PROJECT";

const projectFormReducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case SET_GITHUB:
      return {
        ...state,
        github: action.payload,
      };
    case SET_LIVE_URL:
      return {
        ...state,
        liveUrl: action.payload,
      };
    default:
      return state;
  }
};

const ProjectForm = (props) => {
  const token = useSelector((state) => state.auth.token);
  const { sendRequest, data, error, isLoading } = useHttp();
  const navigate = useNavigate();
  const [action, setAction] = useState(null);

  const [projectFormState, dispatch] = useReducer(projectFormReducer, {
    title: "",
    description: "",
    imageUrl: "",
    github: "",
    liveUrl: "",
  });

  useEffect(() => {
    if (props.isEditing) {
      setAction(FETCH_PROJECT);
      sendRequest(
        // "/projects/" + props.projectId
        "/projects/" + props.projectId
      );
    }
  }, [props.projectId, props.isEditing, sendRequest]);

  useEffect(() => {
    if (data && action === FETCH_PROJECT) {
      const { project } = data;

      dispatch({
        type: SET_TITLE,
        payload: project.title,
      });
      dispatch({
        type: SET_DESCRIPTION,
        payload: project.description,
      });
      dispatch({
        type: SET_GITHUB,
        payload: project.github,
      });
      dispatch({
        type: SET_IMAGE_URL,
        payload: project.imageUrl,
      });
      dispatch({
        type: SET_LIVE_URL,
        payload: project.liveUrl,
      });

      setAction(null);
    }
  }, [action, data]);
  //console.log(projectFormState);
  useEffect(() => {
    if (data && action === SUBMIT_PROJECT) {
      navigate("/action/success", {
        state: {
          message: `Project ${
            props.isEditing ? "edited" : "added"
          } successfully!`,
          actions: [
            {
              label: "Go to project list",
              path: "/admin/projects",
            },
            {
              label: "Add another project",
              path: "/admin/add-project",
            },
          ],
        },
      });
    }
  }, [action, data, navigate, props.isEditing]);

  const handleTitleChange = (event) => {
    dispatch({
      type: SET_TITLE,
      payload: event.target.value,
    });
  };

  const handleDescriptionChange = (event) => {
    dispatch({
      type: SET_DESCRIPTION,
      payload: event.target.value,
    });
  };

  const handleImageUrlChange = (event) => {
    dispatch({
      type: SET_IMAGE_URL,
      payload: event.target.value,
    });
  };

  const handleGithubChange = (event) => {
    dispatch({
      type: SET_GITHUB,
      payload: event.target.value,
    });
  };

  const handleLiveUrlChange = (event) => {
    dispatch({
      type: SET_LIVE_URL,
      payload: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO validation
    setAction(SUBMIT_PROJECT);
    sendRequest(
      // "/admin/projects" +
      "/admin/projects" +
        (props.isEditing ? "/" + props.projectId : ""),
      {
        method: props.isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: projectFormState,
      }
    );
  };

  return (
    <>
      <h1 className={classes["page-title"]}>
        {props.isEditing ? "Edit" : "Add"} project
      </h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Errors error={error} />

        <div className={inputClasses["form-control"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={projectFormState.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={projectFormState.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={projectFormState.imageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="github">Github</label>
          <input
            type="text"
            name="github"
            id="github"
            value={projectFormState.github}
            onChange={handleGithubChange}
          />
        </div>
        <div className={inputClasses["form-control"]}>
          <label htmlFor="liveUrl">Live Url</label>
          <input
            type="text"
            name="liveUrl"
            id="liveUrl"
            value={projectFormState.liveUrl}
            onChange={handleLiveUrlChange}
          />
        </div>
        <div className={`${inputClasses["form-actions"]} ${classes.actions}`}>
          <button className={`${buttonClasses.btn}`} type="submit">
            {props.isEditing ? "Save" : "Add"}
          </button>
        </div>
        {isLoading && <LoadingSpinner />}
      </form>
    </>
  );
};

export default ProjectForm;
