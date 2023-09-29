import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      Navbar <br/>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact-us">ContactUs</Link>
    </div>
  );
}

export default Navbar