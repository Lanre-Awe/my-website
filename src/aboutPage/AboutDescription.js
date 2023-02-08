import { Link } from "react-router-dom";
import classes from "./About.module.css";

const AboutDescription = () => {
  return (
    <div className={classes.description}>
      <p>
        Hiya!, my name is Awe Olanrewaju. I am a graduate of Olabisi Onabanjo
        University; where i studied Animal Production. I am a self-taught
        frontend developer (not neccessirily self taught. I had a lot of tutors
        from online schools like udacity, udemy and a whole lot of youtube!!) I
        am proficient in HTML5, css, javascript and frameworks such as ReactJs,
        Nextjs
      </p>
      <p>
        i love tech and have always been curious about how things works. I could
        really dig in and go deep about my love for tech, but i would leave that
        for you to find out 😌, probably after being hired🙂
      </p>
      <p>
        i also love gaming; especially Call of Duty both on mobile and console.
        FIFA is also up there. i know i am a FIFA god, just putting it out there
      </p>
      <p>
        If you are interested in seeing some videos and pictures of my oh so
        "boring" life check out{" "}
        <Link to="/gallery" className={classes.link}>
          my gallery
        </Link>
      </p>

      <p>Oh, wow!. you made it this far into knowing me....</p>
      <p>
        i love to bring beautiful web app designs to life with intuitive user
        experiences and interfaces. Stole a line from the UI/UX guys..
      </p>
      <p>I am very happy to work with you on our projects</p>
      <p>
        in as much as it saddens me, i have to conclude my intoduction. we would
        catch up in the emails
      </p>
      <Link to="/contact">
        <button className={classes.contactButton}>Contact</button>
      </Link>
    </div>
  );
};

export default AboutDescription;
