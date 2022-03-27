import MainNavigation from "../navigation/MainNavigation";
import classes from "./Layout.module.css";
import ContactMe from "../sections/contact-me/ContactMe"

const Layout = (props)=>{
  return (
    <div className={classes["main-container"]}>
      <header>
        <MainNavigation />
      </header>
      <main>
        {/* Sections here */}
        {props.children}
      </main>
      <footer>
        {/* Contact details */}
        <ContactMe/>
        {/* <p className={classes.copy}>Kudzai Jalos | Copyright &copy; {new Date().getFullYear()}</p> */}
      </footer>
    </div>
  )
}

export default Layout;