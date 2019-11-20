import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { isAuthenticated, logout } from "./services/authentication/auth"

import "./App.css";
import Routes from "./Routes";

function handleLogout() {
    logout()
    this.props.history.push('/home')
}

function App(props) {
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
          { isAuthenticated() ? 
                  <LinkContainer to="/logout">
                  <NavItem onClick={handleLogout} >Logout</NavItem>
                </LinkContainer> :
                
                <LinkContainer to="/login">
                  <NavItem> Login</NavItem>
                </LinkContainer>
             } 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;