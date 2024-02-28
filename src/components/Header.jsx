import {React, useState} from "react";
import logo from "../assets/img/logoo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="header__logo">
        <img
          src={logo}
          alt="logo image"
          style={{
            width: "45px",
            height: "45px",
            marginTop: "5px",
          }}
        />
        <h4
          style={{
            position: "absolute",
            top: "8px",
            left: "60px",
            marginTop: "10px",
          }}
        >
          Ace of Digital
        </h4>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <i className="fa fa-bars"></i>
      </div>
      <ul
        className={`list-items ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <li className="list-item">
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/about" onClick={toggleMobileMenu}>
            About Us
          </Link>
        </li>
        <li className="list-item">
          <Link to="/services" onClick={toggleMobileMenu}>
            Services
          </Link>
        </li>
        <li className="list-item">
          <Link to="/testimonials" onClick={toggleMobileMenu}>
            Testimonials
          </Link>
        </li>
        <li className="list-item">
          <Link to="/contact" onClick={toggleMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
