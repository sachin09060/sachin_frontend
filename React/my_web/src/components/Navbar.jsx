import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link1">Link1</Nav.Link>
              <Nav.Link href="#link2">Link2</Nav.Link>
              <Nav.Link href="#link3">Link3</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#linked">Linked</Nav.Link>
              <Nav.Link href="#search">
                <input type="text" placeholder="Search" className="ms-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavbarComponent;
  