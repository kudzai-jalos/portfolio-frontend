import classes from "./NavItem.module.css"

const NavItem = (props) => {
  return <li className={`${classes["nav-item"]} ${props.className}`}>
    {props.children}
  </li>
}

export default NavItem;