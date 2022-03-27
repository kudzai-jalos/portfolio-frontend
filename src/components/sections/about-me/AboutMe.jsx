import classes from "./AboutMe.module.css"
import layoutClasses from "../../layout/Layout.module.css"

const AboutMe = (props) => {
  return (
    <section id="about-me" className={`${layoutClasses.container} ${classes["container"]}`}>
      <div className={classes["content"]}>
        <h2>About me</h2>
        <p>
          I am an extremely inspired web developer. I wrote my first lines of code
          in 2016. Since then, I have learnt many new things and my love for
          programming has only grown. From a young age, I have always believed I
          can do anything I put my mind to and that has fueled me to this very day
          to when writing code. I was immedietly intrigued by software
          development when it was first introduced to me. I absolutely love
          solving problems and I strongly believe that we can solve anything with
          code.
        </p>
      </div>
      <div className={classes["image-container"]}>
        <img src="/kudzai-jalos.png" alt="Kudzai Jalos" />
      </div>
    </section>
  );
};

export default AboutMe;
