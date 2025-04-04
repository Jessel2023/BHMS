import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ zIndex: 1050, position: 'fixed', width: '100%', top: 0 }}>
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-navbar-nav" />
        <Navbar.Collapse id="admin-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <img 
                  src="https://images.pexels.com/users/avatars/839746745/jessel-joy-velasco-667.png" 
                  alt="Profile" 
                  className="rounded-circle" 
                  style={{ width: '30px', height: '30px', objectFit: 'cover' }} 
                />
              } 
              id="admin-profile-dropdown"
            >
              <NavDropdown.Item as={Link} to="/adminprofile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
