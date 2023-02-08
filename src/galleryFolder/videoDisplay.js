import classes from "./gallery.module.css";

const VideoDisplay = (props) => {
  return (
    <div className={classes.videoContainer}>
      <div>{props.desc}</div>
      <video src={props.src} controls></video>
    </div>
  );
};

export default VideoDisplay;
