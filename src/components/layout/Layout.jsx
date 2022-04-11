import MainNavigation from "../navigation/MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes["main-container"]}>
      <header>
        <MainNavigation />
      </header>
      {/* Sections here */}
      {props.children}
    </div>
  );
};

export default Layout;
