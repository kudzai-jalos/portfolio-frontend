import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <div className={`${classes.dropdown} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Dropdown;
