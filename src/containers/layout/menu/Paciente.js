import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { atendent } from '../../../services/authentication/auth'

function Pacient() {
    return (
        <>
            {(atendent()) && (
                <NavDropdown eventKey="1" title="Paciente" id="nav-dropdown">
                    <MenuItem eventKey="1.1" href='/paciente'>Criar</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="1.2" href="/pacienteList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Pacient;
