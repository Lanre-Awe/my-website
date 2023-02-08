import { Fragment } from "react";
import AboutDescription from "./AboutDescription";
import AboutHeading from "./AboutHeading";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <Fragment>
      <AboutHeading />
      <AboutImage />
      <AboutDescription />
    </Fragment>
  );
};

export default About;
