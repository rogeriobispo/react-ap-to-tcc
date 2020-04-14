import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { medic } from '../../../services/authentication/auth'

function Medico() {
    return (
        <>
            {
                (medic()) && (
                    <NavDropdown eventKey="2" title="Agenda" id="nav-dropdown">
                        <MenuItem eventKey="2.2" href="/criarAgenda">Criar</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="1.2" href="/agendaList">Listar</MenuItem>
                    </NavDropdown>
                )
            }
        </>
    );
}

export default Medico;

