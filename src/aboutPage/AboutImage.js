import lanre from "../lanre.jpg";
import classes from "./About.module.css";

const AboutImage = () => {
  return (
    <div className={classes.imgContainer}>
      <img src={lanre} alt="" />
    </div>
  );
};

export default AboutImage;
