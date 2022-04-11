import classes from "./Error.module.css";

const ErrorMessage = (props) => {
  //console.log(props)
  return <p className={classes.error}>{props.message}</p>;
};

export default ErrorMessage;
