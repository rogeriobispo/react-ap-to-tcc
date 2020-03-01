import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function Logout(props) {
    return (
        <Navbar.Collapse>
            <Nav pullRight>
                {props.logedIn ? (
                    <LinkContainer to="/logout">
                        <NavItem onClick={() => props.onClick()}>
                            {props.logedIn ? <span>{props.userName}</span> : ''}
                            {' '}
                            - Logout
                        </NavItem>
                    </LinkContainer>
                ) : (
                        <LinkContainer to="/">
                            <NavItem> Login</NavItem>
                        </LinkContainer>
                    )}
            </Nav>
        </Navbar.Collapse>
    );
}

export default Logout;