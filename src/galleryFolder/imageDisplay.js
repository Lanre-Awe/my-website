import classes from "./gallery.module.css";

const ImageDisplay = (props) => {
  return (
    <>
      <div className={classes.imgContainer}>
        <img src={props.src} alt="" />
        <div
          className={classes.cover}
          onClick={() => props.onPreview(props.src, props.desc)}
        >
          <p>view</p>
        </div>
        <div className={classes.desc}>{props.desc}</div>
      </div>
    </>
  );
};

export default ImageDisplay;
