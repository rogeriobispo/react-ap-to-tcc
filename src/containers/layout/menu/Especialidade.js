import React from 'react';
import { NavDropdown, MenuItem, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { admin } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {admin() && (
                <NavDropdown title="Especialidade" id="nav-dropdown">
                    <MenuItem>
                        <LinkContainer to={{ pathname: "/especialidade" }}>
                            <NavItem>
                                Criar
                            </NavItem>
                        </LinkContainer>
                    </MenuItem>
                    <MenuItem href="/especialidadeList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
