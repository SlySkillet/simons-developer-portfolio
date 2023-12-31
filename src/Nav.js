import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar className="bg navbar fixed-top">
        <Container className="navbar-container">
          <Navbar.Brand className="brand" href="/">
            S.C.
          </Navbar.Brand>
          <Nav className="me-auto">
            <HashLink smooth to="/#home" className="navbar-link nav-link">
              Home
            </HashLink>
            <HashLink smooth to="/#projects" className="navbar-link nav-link">
              Projects
            </HashLink>
            <HashLink smooth to="/#about2" className="navbar-link nav-link">
              About
            </HashLink>
            <Nav.Link className="navbar-link" href="/resume">
              Resume
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
