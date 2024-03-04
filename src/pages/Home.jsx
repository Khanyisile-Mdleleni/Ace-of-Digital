import React from "react";
import background from "../assets/img/bgg.jpg";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      id="home"
      style={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7))  , url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
        opacity: "0.9"
      }}
    >
      <div className="home-content-container" style={{ position: "absolute", top: "120px", left: "1%" }}>
        <div className="home-content">
          <h1 className="home-title">Welcome to Ace of Digital</h1> <br />
          <p className="home-description">
            Where technology meets creativity !
          </p>{" "}
          <br /> <br />
          <div className="home-button">
            <Link to="/contact">
              {" "}
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
