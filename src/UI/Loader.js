import classes from "./loader.module.css";
import avatar from "../avatar.jpg";

const Loader = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src={avatar} alt="" className={classes.iconPhone} />
      </div>
    </div>
  );
};

export default Loader;
