import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="container mt-5 main ">
      <div className="row align-items-center">
        <div className="information col-lg-6 col-md-12 mb-4 mb-lg-0 text-center text-lg-start px-4">
          <h1
            className="my-5"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "500",
            }}
          >
            Hi, Hi, I'm John Deo.
          </h1>
          <p
            style={{ lineHeight: "22px", margin: "30px 0", color: "#9f9f9fff" }}
          >
            A freelance Web developer from London. I convert custom <br /> web
            designs to bootstrap templates. <br /> <br />I make YouTube videos
            and write Blog.
          </p>

          <Button variant="primary" size="lg" className="rounded-pill my-2 btn">
            I'm Available
          </Button>

          <div
            className="icons my-4"
            style={{ color: "#9f9f9fff", display: "flex", gap: "10px" }}
          >
            <FaFacebookF />
            <FaTwitter />
            <AiFillInstagram />
            <FaGithub />
          </div>
        </div>

        <div className="image col-lg-6 col-md-12 text-center">
          <img
            src="src\assets\jhon_deo.png"
            alt=""
            height={"420px"}
            style={{ filter: "none !impotant" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
