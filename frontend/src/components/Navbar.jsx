import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user && user.role === 'ADMIN';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="glass-navbar shadow-sm py-2">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-white">
            <span style={{ color: '#ff4757' }}>Bike</span>X<span style={{ color: '#1e90ff' }}>Rent</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" className="bg-light" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <NavLink to="/bikes" className="nav-link nav-item-custom">Bikes</NavLink>

              {isAdmin && (
                <NavLink to="/allbookings" className="nav-link nav-item-custom">All Bookings</NavLink>
              )}

              <NavLink to="/contact-us" className="nav-link nav-item-custom">Contact Us</NavLink>
              <NavLink to="/about-us" className="nav-link nav-item-custom">About Us</NavLink>
            </Nav>

            <Nav className="ms-auto">
              {!token ? (
                <>
                  <NavLink to="/login" className="nav-link nav-item-custom">Login</NavLink>
                  <NavLink to="/register" className="nav-link nav-item-custom">Register</NavLink>
                </>
              ) : (
                <NavDropdown
                  title={
                    <span>
                      <FaUserCircle className="me-2" />
                      {user?.username || 'User'}
                    </span>
                  }
                  id="user-dropdown"
                  align="end"
                  className="user-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Custom Glassmorphism Navbar Styles */}
      <style jsx="true">{`
        .glass-navbar {
          background-color: rgba(0, 0, 0, 0.4) !important;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-item-custom {
          color: white;
          margin-right: 12px;
          padding: 6px 14px;
          border-radius: 6px;
          transition: background-color 0.3s, color 0.3s;
          text-decoration: none;
        }

        .nav-item-custom:hover,
        .nav-item-custom.active {
          background-color: #1e90ff;
          color: white;
        }

        .user-dropdown .dropdown-toggle {
          color: white !important;
        }

        .user-dropdown .dropdown-menu {
          background-color: #212529;
          border: none;
        }

        .user-dropdown .dropdown-item {
          color: white;
        }

        .user-dropdown .dropdown-item:hover {
          background-color: #1e90ff;
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
