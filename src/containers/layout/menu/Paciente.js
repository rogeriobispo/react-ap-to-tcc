import React from 'react';
import { NavDropdown, MenuItem, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { admin, atendent } from '../../../services/authentication/auth'

function Pacient() {
    return (
        <>
            {(admin() || atendent()) && (
                <NavDropdown eventKey="1" title="Paciente" id="nav-dropdown">
                    <MenuItem eventKey="1.1">
                        <LinkContainer to={{ pathname: "/paciente" }}>
                            <NavItem>
                                Criar
                            </NavItem>
                        </LinkContainer>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="1.2" href="/pacienteList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Pacient;
