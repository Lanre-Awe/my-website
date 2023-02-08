import classes from "./MainPage.module.css";
import ade from "../frontpage.jpg";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <h1 className={classes.mainName}>Awe Olanrewaju</h1>
        <div className={classes.imageContainerMin}>
          <img src={ade} alt="" />
        </div>
        <Typed
          strings={[
            "I'm a Frontend Developer",
            "I love creating cool web-apps",
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />

        <p className={classes.description}>
          hey ya!, i am a frontend developer who specializes in making
          beaautiful web apps and websites. I am proficient in REACTJS, NEXT and
          javascript
        </p>
        <div className={classes.project}>
          <p>
            not convinced by my extremely charming face?, see some awesome
            projects
          </p>
          <Link to="/project">
            <button>see projects</button>
          </Link>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img src={ade} alt="" />
      </div>
    </div>
  );
};

export default MainPage;
