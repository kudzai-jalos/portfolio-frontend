import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../ui/Card";
import classes from "./SkillItem.module.css";
import buttonClasses from "../ui/Button.module.css";
import { useSelector } from "react-redux";

const SkillItem = (props) => {
  const token = useSelector((state) => state.auth.token);
  const { data, error, isLoading, sendRequest } = useHttp();
  const isAdmin = props.isAdmin;
  const { tech } = props;

  const { onDelete } = props;

  useEffect(() => {
    if (data) {
      onDelete(props.id);
    }
  }, [data, props.id, onDelete]);

  const handleDelete = async () => {
    await sendRequest("http://localhost:8000/admin/skills/" + props.id, {
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
    </Card>
  );
};

export default SkillItem;
