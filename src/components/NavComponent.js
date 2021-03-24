import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Thomas</Navbar.Brand>
        <Nav className="mr-auto">
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Nav.Link href="#my-projects">Projects</Nav.Link>
          <Link to="/contact">Contact</Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavComponent;
