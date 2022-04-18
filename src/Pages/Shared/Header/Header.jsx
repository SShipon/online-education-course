import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import './Header.css'
const Header = () => {
    return (
      <>
        <Navbar
          id="header-style"
          className="py-3 style-color"
          collapseOnSelect
          expand="lg"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center"
            >
              <img
                className="header-img"
                src="https://i.ibb.co/pK1vRcB/pngtree-education-logo-vector-image-png-image-728263.jpg"
                alt=""
              />
              <i className="fs-3 fw-bold ">
                Online<span className="word-color">Teaching</span>
              </i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mx-auto ">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/checkout">
                  Checkout
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>

                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login" className="fs-5">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;