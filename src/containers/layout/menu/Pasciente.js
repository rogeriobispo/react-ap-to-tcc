import React from 'react';
import { NavDropdown, MenuItem, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { admin, atendent } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {(admin() || atendent()) && (
                <NavDropdown eventKey="1" title="Pasciente" id="nav-dropdown">
                    <MenuItem eventKey="1.1">
                        <LinkContainer to={{ pathname: "/pasciente" }}>
                            <NavItem>
                                Criar
                            </NavItem>
                        </LinkContainer>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="1.2" href="/pascienteList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
