import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{ width: "fit-content", margin: "10% auto", textAlign: "center" }}
    >
      <h2>Page Not Found</h2>
      <Link to="/">
        <button
          style={{
            padding: "15px",
            borderRadius: "5px",
            background: "rgb(194,194,33)",
            color: "#fff",
          }}
        >
          {" "}
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
