import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import ClinicClient from "../../services/Clinic/ClinicClient"
import { login } from '../../services/authentication/auth'
import PublicLayout from "../layout/publicLayout"
import "./Login.css";

export default function Login(props) {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  function validateForm() {
    return email.length > 5 && password.length > 5;
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await ClinicClient.post("/sessions", { "email": email, "password": password })

      login(response.data.token)
      props.history.push('/Home')
    } catch (e) {
      console.dir(e)
      window.flash(`Usuário ou senha Inválida`, 'error')
    }
  }

  return (

    <PublicLayout isAuthenticated={false}>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setemail(e.target.value)}
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