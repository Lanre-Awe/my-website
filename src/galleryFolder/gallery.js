import classes from "./gallery.module.css";
import ImageDisplay from "./imageDisplay";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import vid1 from "./videos/vid1.mp4";
import vid2 from "./videos/vid2.mp4";
import vid3 from "./videos/vid3.mp4";
import vid4 from "./videos/vid4.mp4";
import VideoDisplay from "./videoDisplay";
const IMGSRC = [
  {
    id: 1,
    src: img1,
    description: "Final Project Day",
  },
  { id: 2, src: img2, description: "My Companion🤣" },
  { id: 3, src: img3, description: "the best game to play💯" },
  { id: 4, src: img4, description: "Call Of Duty Mobile dub 😌" },
  { id: 5, src: img5, description: "i and My Brother" },
  { id: 6, src: img6, description: "After Final University Exam" },
  { id: 7, src: img7, description: "A Nice Picture, cause why not" },
  { id: 8, src: img8, description: "First Day Of Coding" },
  { id: 9, src: img9, description: "First Time Using ReactJs" },
  { id: 10, src: img10, description: "NYSC Camp Ebonyi" },
  { id: 11, src: img11, description: "Best Camp Friend" },
];

const VIDSRC = [
  {
    id: 1,
    src: vid1,
    description: "Camp Outfit",
  },
  {
    id: 2,
    src: vid2,
    description: "NYSC Camp Ebonyi",
  },
  {
    id: 3,
    src: vid3,
    description: "As I said; a FIFA god 😶‍🌫️",
  },
  {
    id: 4,
    src: vid4,
    description: "Call Of Duty 🪖",
  },
];

const Gallery = () => {
  return (
    <>
      <div className={classes.heading}>
        <h2>Welcome to Awe's Gallery</h2>
      </div>
      <div className={classes.imageHeader}>
        <h2>Images</h2>
      </div>
      {IMGSRC.map((item) => {
        return (
          <ImageDisplay src={item.src} desc={item.description} key={item.id} />
        );
      })}

      <div className={classes.videoDiv}>
        <div className={classes.imageHeader}>
          <h2>Videos</h2>
        </div>
        {VIDSRC.map((item) => {
          return (
            <VideoDisplay
              src={item.src}
              desc={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
