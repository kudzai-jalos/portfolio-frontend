import classes from "./Landing.module.css";

const Landing = (props) => {
  return (
    <section id="landing" className={`${classes["container"]}`}>
      <div className={classes["content"]}>
        <h1 className={classes.name}>Kudzai Jalos</h1>
        <p className={classes.title}>Web developer</p>
      </div>
    </section>
  );
};

export default Landing;
