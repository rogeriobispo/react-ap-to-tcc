import React from 'react';
import { Navbar } from "react-bootstrap";
import ClinicaMedica from './clinicaMedica'
import Login from './login'

export default function PublicLayout(prop) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <ClinicaMedica />
        <Login />
      </Navbar>
      {prop.children}
    </div>
  );
}
