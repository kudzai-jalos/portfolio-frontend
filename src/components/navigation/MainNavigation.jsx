import NavItem from "./NavItem";
import classes from "./MainNavigation.module.css";
import btnClasses from "../ui/Button.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const MainNavigation = (props) => {
  const [navShowing, setNavShowing] = useState(false);
  const [shownFirstTime, setShownFirstTime] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = (event) => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    //console.log("Toggling nav to", !navShowing);
    setShownFirstTime(true);
    setNavShowing((state) => !state);
  };

  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  const handleLogout = () => {
    dispatch(logout());
    navigate("/action/success", {
      state: {
        message: "Logged out successfully.",
        actions: [
          {
            label: "Go to home page.",
            path: "/",
          },
        ],
      },
    });
  };

  useEffect(() => {
    const hideNav = (event) => {
      //console.log("CLICKED", event.target);

      if (
        event.target.id !== "main-nav" &&
        event.target.id !== "hamburger" &&
        event.target.parentNode.id !== "hamburger"
      ) {
        //console.log("hiding nav", event.target);
        setNavShowing(false);
      }
    };
    const handleResize = () => {
      setShownFirstTime(false);
    };
    if (navShowing) {
      document.addEventListener("click", hideNav);
      window.addEventListener("resize", hideNav);
      window.addEventListener("resize", handleResize);
      //console.log("Add event listener");
    }

    return () => {
      // setShownFirstTime(false);
      document.removeEventListener("click", hideNav);
      window.removeEventListener("resize", hideNav);
      window.removeEventListener("resize", handleResize);
    };
  }, [navShowing]);
  // //console.log("NAV showing", windowWidth >= 768 || navShowing);
  return (
    <nav className={classes["main-navigation"]}>
      {windowWidth <= 768 && (
        <div id="hamburger" className={classes.hamburger} onClick={toggleNav}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      )}
      <CSSTransition
        in={windowWidth >= 768 || (navShowing && shownFirstTime)}
        timeout={20000}
        classNames={{
          enter: classes["dropdown-enter"],
          enterActive: classes["dropdown-enter-active"],
          enterDone: classes["dropdown-enter-done"],
          exit: classes["dropdown-exit"],
          exitActive: classes["dropdown-exit-active"],
          exitDone: classes["dropdown-exit-done"],
        }}
      >
        <ul id="main-nav" className={`${classes["nav-items"]}`}>
          <NavItem>
            <NavLink className={classes["nav-link"]} to="/#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classes["nav-link"]} to="/#about-me">
              About&nbsp;me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classes["nav-link"]} to="/#projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classes["nav-link"]} to="/#skills">
              Skills
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink className={classes["nav-link"]} to="/#certifications">
            Certifications
          </NavLink>
        </NavItem> */}
          <NavItem>
            {isAuth ? (
              <button className={classes["nav-link"]} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink className={`${classes["nav-link"]} `} to="/auth/login">
                Login
              </NavLink>
            )}
          </NavItem>
          <NavItem className={classes.persist}>
            <NavLink
              className={`${classes["nav-link"]} ${btnClasses["btn"]}`}
              to="/#contact-me"
            >
              Contact&nbsp;me
            </NavLink>
          </NavItem>
          {isAuth && (
            <>
              <NavItem>
                <NavLink className={classes["nav-link"]} to="/admin/projects">
                  Admin projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classes["nav-link"]}
                  to="/admin/add-project"
                >
                  Add project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classes["nav-link"]} to="/admin/skills">
                  Admin skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classes["nav-link"]} to="/admin/add-skill">
                  Add skill
                </NavLink>
              </NavItem>
            </>
          )}
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default MainNavigation;

// ${
//   navShowing
//     ? classes["show-nav"]
//     : shownFirstTime
//     ? classes["hide-nav"]
//     : ""
// }
