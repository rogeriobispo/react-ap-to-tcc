import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import AuthClient from "../../services/authentication/AuthClient"
import { login } from '../../services/authentication/auth'
import PublicLayout from "../layout/publicLayout"
import "./Login.css";

export default function Login(props) {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  
  function validateForm() {
    return userName.length > 5 && password.length > 5;
  }

   async function handleSubmit(event) {
    event.preventDefault()
    try {
        const response = await AuthClient.post("/login", { "userName": userName, 	"password": password })
        
        login(response.data.token)
         props.history.push('/Home')
    } catch (e) {
      window.flash(`Usuário ou senha Inválida`, 'error')
    }
  }

  return (
    <PublicLayout isAuthenticated={  false } >
      <div className="Login">
        <form  onSubmit={handleSubmit}>
          <FormGroup controlId="userName" bsSize="large">
            <ControlLabel>Usuário</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Senha</ControlLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    </PublicLayout>
  )
}