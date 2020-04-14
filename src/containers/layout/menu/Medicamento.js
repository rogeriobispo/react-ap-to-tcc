import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { medic } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {(medic()) && (
                <NavDropdown title="Medicamento" id="nav-dropdown">
                    <MenuItem href="/medicamento">Criar</MenuItem>
                    <MenuItem divider />
                    <MenuItem href="/medicamentoList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
