import React from 'react';
import { NavDropdown, MenuItem, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { admin } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {admin() && (
                <NavDropdown eventKey="1" title="Usuário" id="nav-dropdown">
                    <MenuItem eventKey="1.1">
                        <LinkContainer to={{ pathname: "/usuario" }}>
                            <NavItem>
                                Criar
                            </NavItem>
                        </LinkContainer>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="1.2" href="/usuarioList">Lista</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
