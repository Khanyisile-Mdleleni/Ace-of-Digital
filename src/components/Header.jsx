import React from 'react'
import logo from "../assets/img/logoo.png"

const Header = () => {
  return (
    <div>
        <nav className='header'>
        <div className="header__logo">
          <img
            src={logo}
            alt="logo image"
            style={{
              width: "45px",
              height: "45px",
              marginTop: "20px",
            }}
          />
          <h4
            style={{
              position: "absolute",
              top: "8px",
              left: "60px",
              marginTop: "15px",
            }}
          >
            Ace of Digital
          </h4>
        </div>
            <ul className='list-items'>
                <li className='list-item'><a href="#">Home</a></li>
                <li className='list-item'><a href="#">About Us</a></li>
                <li className='list-item'><a href="#">Services</a></li>
                <li className='list-item'><a href="#">Testimonials</a></li>
                <li className='list-item'><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header