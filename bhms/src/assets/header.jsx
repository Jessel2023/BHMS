import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">BoarderFlow</Navbar.Brand>

        {/* Navbar Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse with navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Link as={Link} to="/" className="nav-link text-white">
              Home
            </Nav.Link>

            {/* Features Link */}
            <Nav.Link href="#features" className="nav-link text-white">
              Features
            </Nav.Link>

            {/* About Link */}
            <Nav.Link href="#about" className="nav-link text-white">
              Calculator
            </Nav.Link>

            {/* Contact Link */}
            <Nav.Link href="#contact" className="nav-link text-white">
              Contact
            </Nav.Link>

            {/* Login Link */}
            <Nav.Link as={Link} to="/login" className="nav-link text-white">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
