import Card from "../UI/Card";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Card>
        <div className={classes.detailContainer}>
          <div className={classes.heading}>
            <h2>Get In Touch</h2>
            <p>here are my information</p>
          </div>
          <div className={classes.information}>
            <div>
              <div className={classes.iconContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={classes.icons}
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                </svg>
              </div>
              <a href="tel:+2348154398428">+2348154398428</a>
            </div>
            <div>
              <div className={classes.iconContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className={classes.icons}
                >
                  <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <a href="mailto:lanreawe7@gmail.com">Lanreawe7@gmail.com</a>
            </div>
          </div>
          <div className={classes.socials}>
            <div className={classes.socialContainer}>
              <a
                href="https://twitter.com/olanrewajuAwe1"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className={classes.socialIcons}
                >
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                </svg>
              </a>
            </div>
            <div className={classes.socialContainer}>
              <a
                href="https://www.linkedin.com/in/awe-olanrewaju-3b1078238/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 72 72"
                  className={classes.socialIcons}
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      width="72"
                      height="72"
                      className={classes.socialIconsIn}
                      rx="4"
                    />
                    <path
                      fill="#FFF"
                      d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.card}>
            <form
              action="mailto:lanreawe7@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className={classes.form}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={classes.form}>
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="mail" />
              </div>
              <div className={classes.form}>
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="30" rows="10" />
              </div>
              <div className={classes.buttonContainer}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Contact;
