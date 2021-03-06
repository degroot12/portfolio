import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Link to="/" className='navbar-brand'>Thomas</Link>
        <Nav className="mr-auto">
        <div className='nav-links'>
          <Link to="/projects" className='nav-link'>Projects</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavComponent;
