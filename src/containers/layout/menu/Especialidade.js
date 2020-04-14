import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"

import { admin } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {admin() && (
                <NavDropdown title="Especialidade" id="nav-dropdown">
                    <MenuItem href='/especialidade'>Criar</MenuItem>
                    <MenuItem href="/especialidadeList">Listar</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
