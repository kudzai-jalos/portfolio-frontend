import classes from "./NavItem.module.css"

const NavItem = (props) => {
  return <li className={classes["nav-item"]}>
    {props.children}
  </li>
}

export default NavItem;