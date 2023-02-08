import Card from "../UI/Card";
import classes from "./project.module.css";
import todoIcon from "../todoIcon.png";
import twitterIcon from "../twitterIcon.png";
import trolley from "../trolley.png";

const projects = [
  {
    projectTitle: "E-COMMERCE APP",
    projectLink: "lanre-e-comemerce-web-app.netlify.app",
    icon: trolley,
    githubLink: "github.com/Lanre-Awe/E-commerce",
    projectDescription:
      "A project very dear to my heart. This app was built using ReactJs, Redux toolkit, Routing and Firebase. Firebase used for authentication, as well as database collection. DISCLAIMER SITE ONLY OPTIMIZED FOR LAPTOPS AND DESKTOP; STYLES WOULD BE DISORIENTING ON MOBILE",
  },

  {
    projectTitle: "A TODO APP",
    projectLink: "lanre-todo-web-app.netlify.app",
    icon: todoIcon,
    githubLink: "github.com/Lanre-Awe/todo-app",
    projectDescription:
      "A todo single page application built completely with reactJs. Utilizing react routing, redux for state management and localStorage as primary storage. Charts were used to accurately tracks and display progress made. ",
  },
  {
    projectTitle: "TWITTER CLONE",
    projectLink: "lanre-twitter-clone.netlify.app/",
    icon: twitterIcon,
    githubLink: "github.com/Lanre-Awe/Twitter-clone",
    projectDescription:
      "A Single Page Application, clone (look-alike) of twitter. Made entirely with Reactjs. utilizing routing for SPA functionality; using redux for state management; as well as localStorage to persist data. Basic CRUD fumctionality, uploading of images as tweets and comments etc. are present in this clone. ENJOY  ",
  },
];

const Project = () => {
  return (
    <div className={classes.mainContainer}>
      {projects.map((item) => {
        return (
          <Card key={item.projectTitle}>
            <div>
              <div className={classes.guide}>
                <span className={classes.title}>{item.projectTitle}</span>
                <img src={item.icon} alt="" />
              </div>
              <div className={classes.link}>
                <a
                  href={`https://${item.projectLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view
                </a>
              </div>
              <div className={classes.gitlink}>
                <a
                  href={`https://${item.githubLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view source code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                    className={classes.icon}
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </a>
              </div>
              <p>{item.projectDescription}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Project;
