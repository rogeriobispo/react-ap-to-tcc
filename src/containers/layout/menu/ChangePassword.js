import React from 'react';
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { user } from '../../../services/authentication/auth'

function ChangePassword() {
    return (
        <>
            <Nav pullRight>
                <div className="changePassword">
                    <Link to={{ pathname: `/usuario/${user().id}/password`, user: user() }}>
                        Trocar senha
                    </Link>
                </div>
            </Nav>
        </>
    );
}

export default ChangePassword;