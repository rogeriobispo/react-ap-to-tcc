import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { atendent, admin } from '../../../services/authentication/auth'

function Medico() {
    return (
        <>
            {
                (admin() || atendent()) && (
                    <NavDropdown eventKey="2" title="Agendamento" id="nav-dropdown">
                        <MenuItem eventKey="2.2" href="/agendamento">Criar</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="1.2" href="/agendamentoList">Listar</MenuItem>
                    </NavDropdown>
                )
            }
        </>
    );
}

export default Medico;

