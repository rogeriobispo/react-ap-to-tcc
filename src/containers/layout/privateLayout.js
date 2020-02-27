import React from 'react'
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { user } from '../../services/authentication/auth'

import './privatelayout.css'
import { admin, atendent } from '../../services/authentication/auth'

export default function PrivateLayout(props) {
  const userObject = user()
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect className="barSup  borderRightLeft">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Clinica Médica</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {props.isAuthenticated ?
              <LinkContainer to="/logout">
                <NavItem onClick={() => props.handleLogout()}>
                  {props.isAuthenticated ? <span>{user().name.split(' ')[0]}</span> : ''} - Logout
                </NavItem>
              </LinkContainer> :
              <LinkContainer to="/">
                <NavItem> Login</NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* menu */}
      <Nav bsStyle="tabs" className="menu borderRightLeft">
        {admin() &&
          <NavDropdown eventKey="1" title="Usuário" id="nav-dropdown">
            <MenuItem eventKey="1.1" href=" /usuarioForm" >Criar</MenuItem>
            <MenuItem eventKey="1.2" href="/usuarioList">Listar</MenuItem>
            <MenuItem eventKey="1.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="1.4">Separated link</MenuItem>
          </NavDropdown>
        }
        {(admin() || atendent()) &&
          < NavDropdown eventKey="2" title="Médico" id="nav-dropdown">
            <MenuItem eventKey="2.2" href="/MedicoList">Listar</MenuItem>
            <MenuItem eventKey="2.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2.4">Separated link</MenuItem>
          </NavDropdown>
        }
        {/* <NavItem eventKey="3" href="/home">
          NavItem 1 content
        </NavItem>
        <NavItem eventKey="4" title="Item"  disabled>
          NavItem 2 content
        </NavItem>*/}
        <Nav pullRight>
          <div className="changePassword">
            <Link to={{ pathname: `/usuario/password`, user: userObject }} >
              Trocar senha
            </Link>
          </div>
        </Nav>
      </Nav>
      {/* fim menu */}

      {props.children}
    </div >
  );
}
