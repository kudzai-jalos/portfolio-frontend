import { useEffect,useCallback, useState } from "react";
import techstack from "@shiroi-shi/techstack";
import useHttp from "../../hooks/use-http";
import classes from "./SkillList.module.css";
import SkillItem from "./SkillItem";
import LoadingSpinner from "../ui/LoadingSpinner";
import Errors from "../ui/Errors";
import ErrorMessage from "../ui/ErrorMessage";

const techList = techstack.all;

const SkillList = (props) => {
  const { data, error, isLoading, sendRequest } = useHttp();
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    if (data !== null) {
      console.log(data);
      setSkillList(data.skills || []);
    }
    console.log("Effect running");
  }, [data]);

  useEffect(() => {
    (async () => {
      console.log("fetching skills running");
      await sendRequest("https://kudzai-jalos-api.herokuapp.com/skills");
    })();
  }, [sendRequest]);

  const handleDelete = useCallback((id) => {
    setSkillList((list) => {
      return list.filter((skill) => {
        return skill._id !== id;
      });
    });
  },[]);

  const skillsJSX = skillList.map((skill) => {
    const options = {};

    if (props.isAdmin) {
      options.isAdmin = true;
    }

    const tech = techList.find((t) => {
      // Change to slug
      return t.slug === skill.slug;
    });

    if (!tech) throw new Error("Skill not found");
    return (
      <SkillItem
        key={skill._id}
        id={skill._id}
        tech={tech}
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
        <ErrorMessage />
      ) : skillList.length === 0 ? (
        <p>No skills found</p>
      ) : (
        <div className={classes.skills}>{skillsJSX}</div>
      )}
    </>
  );
};

export default SkillList;
