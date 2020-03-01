import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Login() {
    return (
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/">
                    <NavItem> Login</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    );
}

export default Login;