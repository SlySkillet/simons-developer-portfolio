import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){
    return(
    <Navbar expand="lg" className="bg navbar fixed-top">
        <Container className="navbar-container">
            <Navbar.Brand className="brand" href="#home">Simon Conrad</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  );
}


export default NavBar
