import React from 'react';
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { user } from '../../../services/authentication/auth'
import Usuario from './Usuario'
import Medico from './Medico'

function Menu() {
    return (

        <>

            <Nav bsStyle="tabs" className="menu borderRightLeft">
                <Usuario />
                <Medico />

                <Nav pullRight>
                    <div className="changePassword">
                        <Link to={{ pathname: `/usuario/password`, user: user() }}>
                            Trocar senha
                        </Link>
                    </div>
                </Nav>
            </Nav>
        </>

    );
}

export default Menu;