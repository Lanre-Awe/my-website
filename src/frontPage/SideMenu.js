import { NavLink } from "react-router-dom";
import classes from "./MainPage.module.css";

const SideMenu = (props) => {
  return (
    <div className={classes.sideMenu} onClick={props.onClose}>
      <div className={classes.cancelContainer}>
        <div className={classes.cancel}></div>
        <div className={classes.cancel2}></div>
      </div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/project">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
