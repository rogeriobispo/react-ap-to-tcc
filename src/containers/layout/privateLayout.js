import React from 'react'
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

import './privatelayout.css'
import { admin } from '../../services/authentication/auth'

export default function PrivateLayout(props) {
  
  return (
    <div className="App container">
    <Navbar fluid collapseOnSelect className="barSup  borderRightLeft">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/home">Rogério ReactAPP</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      { props.isAuthenticated ? 
              <LinkContainer to="/logout">
              <NavItem onClick={()=> props.handleLogout()} >Logout</NavItem>
            </LinkContainer> :
            
            <LinkContainer to="/">
              <NavItem> Login</NavItem>
            </LinkContainer>
         }    
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    {/* menu */}
    <Nav bsStyle="tabs" activeKey="1" className="menu borderRightLeft">
      { admin() &&
        <NavDropdown eventKey="1" title="Usuário" id="nav-dropdown">
          <MenuItem eventKey="1.1" href="/usuarioForm" >Criar</MenuItem>
          <MenuItem eventKey="1.2" href="/usuarioList">Listar</MenuItem>
          <MenuItem eventKey="1.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="1.4">Separated link</MenuItem>
        </NavDropdown>
      }
        <NavDropdown eventKey="2" title="Cursos" id="nav-dropdown">
          <MenuItem eventKey="2.1">Criar</MenuItem>
          <MenuItem eventKey="2.2">Listar</MenuItem>
          <MenuItem eventKey="2.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2.4">Separated link</MenuItem>
        </NavDropdown>
        {/* <NavItem eventKey="3" href="/home">
          NavItem 1 content
        </NavItem>
        <NavItem eventKey="4" title="Item">
          NavItem 2 content
        </NavItem>
        <NavItem eventKey="5" disabled>
          NavItem 3 content
        </NavItem> */}
      </Nav>
    {/* fim menu */}
  
  {props.children}
  </div>  
  );
}
