import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { atendent } from '../../../services/authentication/auth'

function Medico() {
    return (
        <>
            {
                (atendent()) && (
                    <NavDropdown eventKey="2" title="Médico" id="nav-dropdown">
                        <MenuItem eventKey="2.2" href="/MedicoList">Listar</MenuItem>
                    </NavDropdown>
                )
            }
        </>
    );
}

export default Medico;

