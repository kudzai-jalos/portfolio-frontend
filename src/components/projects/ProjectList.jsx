import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import ErrorMessage from "../ui/ErrorMessage";
import Errors from "../ui/Errors";
import LoadingSpinner from "../ui/LoadingSpinner";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const ProjectList = (props) => {
  const { data, error, isLoading, sendRequest } = useHttp();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    if (data !== null) {
      console.log(data);
      setProjectList(data.projects || []);
    }
    console.log("Effect running");
  }, [data]);

  useEffect(() => {
    sendRequest("http://localhost:8000/projects");
  }, [sendRequest]);

  const handleDelete = useCallback((id) => {
    setProjectList((list) => {
      return list.filter((project) => {
        return project._id !== id;
      });
    });
  }, []);

  const projectsJSX = projectList.map((project) => {
    const options = {};

    if (props.isAdmin) {
      options.isAdmin = true;
    }
    return (
      <ProjectItem
        key={project._id}
        project={project}
        {...options}
        onDelete={handleDelete}
      />
    );
  });

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <Errors error={error} />
      ) : !data ? (
        <ErrorMessage message="Something went wrong..." />
      ) : projectList.length === 0 ? (
        <p>No projects found</p>
      ) : (
        <div className={classes.projects}>{projectsJSX}</div>
      )}
    </>
  );
};

export default ProjectList;
