import React from 'react'
import { Navbar } from "react-bootstrap"
import { user } from '../../services/authentication/auth'
import ClinicaMedica from './clinicaMedica'
import Logout from './logout'
import Menu from './menu'
import './privatelayout.css'


export default function PrivateLayout(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect className="barSup  borderRightLeft">
        <ClinicaMedica />
        <Logout logedIn={props.isAuthenticated} userName={user().name.split(' ')[0]} onClick={props.handleLogout} />
      </Navbar>
      <Menu />

      {props.children}
    </div>
  );
}
