import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import inputClasses from "../ui/Input.module.css";
import buttonClasses from "../ui/Button.module.css";
import classes from "./SkillForm.module.css";
import { useNavigate } from "react-router-dom";
import techstack from "@shiroi-shi/techstack";
import { useSelector } from "react-redux";
import Errors from "../ui/Errors";
import LoadingSpinner from "../ui/LoadingSpinner";

const techList = techstack.all;

const SkillForm = (props) => {
  const token = useSelector((state) => state.auth.token);
  const { sendRequest, data, error, isLoading } = useHttp();
  const navigate = useNavigate();

  const [enteredSkill, setEnteredSkill] = useState(null);
  useEffect(() => {
    if (data) {
      navigate("/action/success", {
        state: {
          message: `Skill added successfully!`,
          actions: [
            {
              label: "Go to skill list.",
              path: "/admin/skills",
            },
            {
              label: "Add another skill",
              path: "/admin/add-skill",
            },
          ],
        },
      });
    }
  }, [data, navigate, props.isEditing]);

  const handleSkillChange = (event) => {
    console.log(event.target.value);
    setEnteredSkill(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO validation

    sendRequest("https://kudzai-jalos-api.herokuapp.com/admin/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: { slug: enteredSkill },
    });
  };

  const skillListJSX = techList.map((tech) => {
    return (
      <option key={tech.slug} value={tech.slug}>
        {tech.name}
      </option>
    );
  });

  return (
    <>
      <h1 className={classes["page-title"]}>
        {props.isEditing ? "Edit" : "Add"} project
      </h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Errors error={error} />
        <div className={inputClasses["form-control"]}>
          <label htmlFor="title">Please select a skill</label>
          <select
            name="title"
            id="skill"
            value={enteredSkill || "default"}
            onChange={handleSkillChange}
          >
            <option value="default" disabled>
              Select Skill
            </option>
            {skillListJSX}
          </select>
        </div>

        <div className={`${inputClasses["form-actions"]} ${classes.actions}`}>
          <button
            className={`${buttonClasses.btn}`}
            type="submit"
            disabled={isLoading}
          >
            {props.isEditing ? "Save" : "Add"}
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

export default SkillForm;
