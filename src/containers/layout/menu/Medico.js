import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { admin, atendent } from '../../../services/authentication/auth'

function Medico() {
    return (
        <>
            {
                (admin() || atendent()) && (
                    <NavDropdown eventKey="2" title="Médico" id="nav-dropdown">
                        <MenuItem eventKey="2.2" href="/MedicoList">Listar</MenuItem>
                    </NavDropdown>
                )
            }
        </>
    );
}

export default Medico;

