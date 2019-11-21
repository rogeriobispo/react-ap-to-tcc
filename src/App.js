import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { isAuthenticated, logout } from "./services/authentication/auth"

import "./App.css";
import Routes from "./Routes";



function App(props) {
   return (
    <div className="App container">
      <Routes/>
    </div>
  );
}

export default App;