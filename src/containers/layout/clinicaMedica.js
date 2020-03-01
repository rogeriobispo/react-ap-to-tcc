import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";


function clinicaMedica() {
    return (
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Clinica Médica</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
    );
}

export default clinicaMedica;