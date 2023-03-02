import { NavLink, Link } from "react-router-dom";
import avatar from "../avatar.jpg";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.burgerContainer} onClick={props.onOpen}>
        <div className={classes.burger}></div>
        <div className={classes.burger}></div>
        <div className={classes.burger}></div>
      </div>
      <div className={classes.avatar}>
        <Link to="/home">
          <img src={avatar} alt="" />
        </Link>
      </div>
      <ul className={classes.navList}>
        <NavLink to="/home">
          <li>Awe Olanrewaju</li>
        </NavLink>
        <NavLink to="/about" activeClassName={classes.active}>
          <li>about</li>
        </NavLink>
        <NavLink to="/gallery" activeClassName={classes.active}>
          <li>gallery</li>
        </NavLink>
        <NavLink to="/project" activeClassName={classes.active}>
          <li>projects</li>
        </NavLink>
      </ul>
      <button>
        <NavLink to="/contact">contact</NavLink>
      </button>
    </nav>
  );
};

export default Navigation;
