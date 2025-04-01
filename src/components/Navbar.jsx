import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="active">Home</a>
      <a href="#education">Education</a>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default Navbar