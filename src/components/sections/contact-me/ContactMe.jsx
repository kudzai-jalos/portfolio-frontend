import classes from "./Projects.module.css";
import layoutClasses from "../../layout/Layout.module.css";
import inputClasses from "../../ui/Input.module.css"
import btnClasses from "../../ui/Button.module.css"


const ContactMe = (props) => {
  return <section id="contact-me" className={`${layoutClasses.container} ${classes["container"]}`}>
    <div className={inputClasses["form-control"]}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div className={inputClasses["form-control"]}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className={inputClasses["form-control"]}>
      <label htmlFor="message">Name</label>
      <textarea name="message" id="message"/>
    </div>
    <div className="form-actions">
      <button className={btnClasses.btn} type="submit"></button>
    </div>
  </section>
}

export default ContactMe;