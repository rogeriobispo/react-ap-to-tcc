import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function PublicLayout(prop) {
  return (
    <div className="App container">
    <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Clinica Médica</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
          <LinkContainer to="/">
            <NavItem> Login</NavItem>
          </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  {prop.children}
  </div>  
  );
}
