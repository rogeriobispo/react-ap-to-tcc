import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import { Container } from './styles';

export default function layout(prop) {
  return (
    <div className="App container">
    <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Rogério ReactAPP</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      { prop.isAuthenticated ? 
              <LinkContainer to="/logout">
              <NavItem onClick={()=> prop.handleLogout()} >Logout</NavItem>
            </LinkContainer> :
            
            <LinkContainer to="/">
              <NavItem> Login</NavItem>
            </LinkContainer>
         }    
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  {prop.children}
  </div>  
  );
}
