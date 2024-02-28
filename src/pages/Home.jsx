import React from "react";
import background from "../assets/img/bgg.jpg";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
        opacity: "0.9"
      }}
    >
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
  );
};

export default Home;
