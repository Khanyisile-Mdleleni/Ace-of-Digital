import React from "react";
import background from "../assets/img/bg.jpg";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div
      id="home"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   minHeight: "100vh",
      //   width: "100%",
      //   backgroundColor: "rgba(255, 255, 255, 0.9)"
      // }}
    >
      <div className="home-content">
        <h1 className="home-title">Welcome to Art of Digital</h1> <br />
        <p className="home-description">
          Where technology meets creativity !
        </p>{" "}
        <br /> <br />
        <div className="home-button">
        <Button >Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
