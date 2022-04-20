import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../ui/Card";
import classes from "./SkillItem.module.css";
import buttonClasses from "../ui/Button.module.css";
import { useSelector } from "react-redux";
import LoadingSpinner from "../ui/LoadingSpinner";

const SkillItem = (props) => {
  const token = useSelector((state) => state.auth.token);
  const { data,  isLoading, sendRequest } = useHttp();
  const isAdmin = props.isAdmin;
  const { tech } = props;

  const { onDelete } = props;

  useEffect(() => {
    if (data) {
      onDelete(props.id);
    }
  }, [data, props.id, onDelete]);

  const handleDelete = async () => {
    await sendRequest("/admin/skills/" + props.id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  return (
    <Card className={classes["skill"]}>
      <p>{tech.name}</p>
      <img src={tech.logo} alt={tech.name + " logo"} />
      {isAdmin && (
        <button
          onClick={handleDelete}
          className={`${buttonClasses.btn} ${buttonClasses["danger-btn"]} ${classes.btn}`}
        >
          Delete
        </button>
      )}
      {isLoading && <LoadingSpinner />}
    </Card>
  );
};

export default SkillItem;
