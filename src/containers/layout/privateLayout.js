import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { Container } from './styles';

export default function PrivateLayout(prop) {
  function handleSelect(eventKey, event) {
    // event.preventDefault();
    // alert(`selected ${eventKey}`);
  }

  
  return (
    <div className="App container">
    <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/home">Rogério ReactAPP</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      { prop.isAuthenticated ? 
              <LinkContainer to="/logout">
              <NavItem onClick={()=> prop.handleLogout()} >Logout</NavItem>
            </LinkContainer> :
            
            <LinkContainer to="/">
              <NavItem> Login</NavItem>
            </LinkContainer>
         }    
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    {/* menu */}
    <Nav bsStyle="tabs" activeKey="1" onSelect={k => handleSelect(k)}>
        <NavDropdown eventKey="1" title="Usuário" id="nav-dropdown">
          <MenuItem eventKey="1.1"><Link to="/usuario">Criar</Link></MenuItem>
          <MenuItem eventKey="1.2"><Link to="#">Listar</Link></MenuItem>
          <MenuItem eventKey="1.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="1.4">Separated link</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey="2" title="Cursos" id="nav-dropdown">
          <MenuItem eventKey="2.1">Criar</MenuItem>
          <MenuItem eventKey="2.2">Listar</MenuItem>
          <MenuItem eventKey="2.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2.4">Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey="3" href="/home">
          NavItem 1 content
        </NavItem>
        <NavItem eventKey="4" title="Item">
          NavItem 2 content
        </NavItem>
        <NavItem eventKey="5" disabled>
          NavItem 3 content
        </NavItem>
      </Nav>
    {/* fim menu */}
  
  {prop.children}
  </div>  
  );
}
