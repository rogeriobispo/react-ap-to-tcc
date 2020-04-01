import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { medic } from '../../../services/authentication/auth'

function Medico() {
    return (
        <>
            {
                (medic()) && (
                    <NavDropdown eventKey="2" title="Atendimento" id="nav-dropdown">
                        <MenuItem eventKey="2.2" href="/AtendimentoList">Listar</MenuItem>
                        <MenuItem eventKey="2.2" href="/receitaList">Receitas</MenuItem>
                        <MenuItem eventKey="2.2" href="/exameList">Exames</MenuItem>
                    </NavDropdown>
                )
            }
        </>
    );
}

export default Medico;

