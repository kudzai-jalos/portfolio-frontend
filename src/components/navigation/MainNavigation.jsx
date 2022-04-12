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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shownFirstTime, setShownFirstTime] = useState(false);
  const [dropdownAppear, setDropDownAppear] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (shownFirstTime) {
      setDropDownAppear(true);
    }
  }, [shownFirstTime]);

  useEffect(() => {
    const handleResize = (event) => {
      setWindowWidth(window.innerWidth);
      setShownFirstTime(false);
      setDropDownAppear(false);
      setNavShowing(false);
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
    if (navShowing) {
      document.addEventListener("click", hideNav);
    }

    return () => {
      document.removeEventListener("click", hideNav);
    };
  }, [navShowing]);
  return (
    <nav className={classes["main-navigation"]}>
      {windowWidth <= 768 && (
        <div id="hamburger" className={classes.hamburger} onClick={toggleNav}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      )}
      {(windowWidth > 768 || shownFirstTime) && (
        <CSSTransition
          in={
            windowWidth >= 768 ||
            (navShowing && shownFirstTime && dropdownAppear)
          }
          timeout={500}
          classNames={{
            enter: classes["dropdown-enter"],
            enterActive: classes["dropdown-enter-active"],
            enterDone: classes["dropdown-enter-done"],
            exit: classes["dropdown-exit"],
            exitActive: classes["dropdown-exit-active"],
            exitDone: classes["dropdown-exit-done"],
          }}
          unmountOnExit={true}
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
                  <NavLink
                    className={classes["nav-link"]}
                    to="/admin/add-skill"
                  >
                    Add skill
                  </NavLink>
                </NavItem>
              </>
            )}
          </ul>
        </CSSTransition>
      )}
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
