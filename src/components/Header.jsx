import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='header'>
            <ul className='list-items'>
                <li className='list-item'><a href="#">Home</a></li>
                <li className='list-item'><a href="#">About Us</a></li>
                <li className='list-item'><a href="#">Services</a></li>
                <li className='list-item'><a href="#">Testimonies</a></li>
                <li className='list-item'><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header