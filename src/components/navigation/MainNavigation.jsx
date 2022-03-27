import NavItem from "./NavItem";
import classes from "./MainNavigation.module.css"
import btnClasses from "../ui/Button.module.css"

const MainNavigation = (props) => {
  return (
    <nav className={classes["main-navigation"]}>
      <ul className={classes["nav-items"]}>
        <NavItem>
          <a className={classes["nav-link"]} href="#about-me">About me</a>
        </NavItem>
        <NavItem>
          <a className={classes["nav-link"]} href="#projects">Projects</a>
        </NavItem>
        <NavItem>
          <a className={classes["nav-link"]} href="#skills">Skills</a>
        </NavItem>
        <NavItem>
          <a className={classes["nav-link"]} href="#certifications">Certifications</a>
        </NavItem>
        <NavItem>
          <a className={`${classes["nav-link"]} ${btnClasses["btn"]}`} href="#contact-me">Contact me</a>
        </NavItem>
      </ul>
    </nav>
  );
};

export default MainNavigation;
