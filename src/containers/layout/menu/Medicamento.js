import React from 'react';
import { NavDropdown, MenuItem, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { medic, admin } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {(admin() || medic()) && (
                <NavDropdown title="Medicamento" id="nav-dropdown">
                    <MenuItem>
                        <LinkContainer to={{ pathname: "/medicamento" }}>
                            <NavItem>
                                Criar
                            </NavItem>
                        </LinkContainer>
                    </MenuItem>
                    <MenuItem href="/medicamentoList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
