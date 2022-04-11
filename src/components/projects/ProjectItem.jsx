import { NavLink, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Card from "../ui/Card";
import classes from "./ProjectItem.module.css";
import buttonClasses from "../ui/Button.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProjectItem = (props) => {
  const token = useSelector(state=>state.auth.token);
  const { data, error, isLoading, sendRequest } = useHttp();
  const navigate = useNavigate();

  const { project } = props;

  const {onDelete} = props;

  useEffect(() => {
    if (data) {
      onDelete(props.id);
    }
  }, [data, props.id, onDelete]);

  const handleDelete = async () => {
    await sendRequest("http://localhost:8000/admin/projects/" + project._id, {
      method: "DELETE",
      headers:{
        Authorization: "Bearer " + token,
      }
    });

    props.onDelete(project._id);
  };

  const handleEdit = () => {
    navigate("/admin/edit-project/:" + project._id, {
      state: {
        project,
      },
    });
  };

  // const handleDetailsClick = () => {
  //   navigate("/projects/"+project._id,{
  //     state:{}
  //   })
  // }

  return (
    <Card className={classes.project}>
      <div className={classes.body}>
        <h3 className={classes.title}>{project.title}</h3>
      </div>
      <div className={classes["image-container"]}>
        <img src={project.imageUrl} alt={project.imageAlt} />
      </div>
      <div className={classes.actions}>
        {props.isAdmin ? (
          <>
            <button className={`${buttonClasses.btn} ${buttonClasses["danger-btn"]}`} onClick={handleDelete}>Delete</button>
            <button className={`${buttonClasses.btn} `} onClick={handleEdit}>Edit</button>
          </>
        ) : (
          <NavLink className={buttonClasses.btn} to={"/projects/"+project._id}>More Details</NavLink>
        )}
      </div>
    </Card>
  );
};

export default ProjectItem;
