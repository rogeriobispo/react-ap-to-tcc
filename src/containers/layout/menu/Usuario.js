import React from 'react';
import { NavDropdown, MenuItem } from "react-bootstrap"
import { admin } from '../../../services/authentication/auth'

function Usuario() {
    return (
        <>
            {admin() && (
                <NavDropdown eventKey="1" title="Usuário" id="nav-dropdown">
                    <MenuItem eventKey="1.1" href="/usuario">Criar</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="1.2" href="/usuarioList">Lista</MenuItem>
                </NavDropdown>
            )}
        </>

    );
}

export default Usuario;
