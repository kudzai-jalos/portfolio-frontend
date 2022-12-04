import classes from "./AboutMe.module.css"
import layoutClasses from "../../layout/Layout.module.css"

const AboutMe = (props) => {
  return (
    <section id="about-me" className={`${layoutClasses.container} ${classes["container"]}`}>
      <div className={classes["content"]}>
        <h2>About me</h2>
        <p>
          I am very inspired web developer. I wrote my first lines of code
          in 2016. Since then, I have learnt many new technologies and my love for
          programming has only grown. From a young age, I have always believed I
          could do anything I put my mind to and that has fueled me to this very day
          to aim to be the best at anything I do. I was immediately intrigued by software
          development when it was first introduced to me. I simply enjoy
          solving problems.
        </p>
      </div>
      <div className={classes["image-container"]}>
        <img src="/kudzai-jalos.png" alt="Kudzai Jalos" />
      </div>
    </section>
  );
};

export default AboutMe;
