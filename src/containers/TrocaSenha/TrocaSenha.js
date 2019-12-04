import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import AuthClient from "../../services/authentication/AuthClient"
import { login } from '../../services/authentication/auth'
import "./TrocaSenha.css";

export default function Login(props) {
  const [password1, setpassword1] = useState("")
  const [password2, setPassword2] = useState("")
  
  function validateForm() {
    return password1 !== password2;
  }

   async function handleSubmit(event) {
    event.preventDefault()
    if(validateForm()){ 
      window.flash('Os Senhas sâo diferentes', 'error')
      return
    }
    try {
        const response = await AuthClient.post("/changePassword", { "password1": password1, 	"password2": password2 })
        
        login(response.data.token)
         props.history.push('/Home')
    } catch (e) {
      window.flash(`Não foi possivel alterar o password`, 'error')
    }
  }

  return (
    <div className="Home">
      <div className="lander">
      
        <div className="Login">
          <form  onSubmit={handleSubmit}>
            <FormGroup controlId="password1" bsSize="large">
              <ControlLabel>Senha</ControlLabel>
              <FormControl
                autoFocus
                type="password"
                value={password1}
                onChange={e => setpassword1(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Confirmação de senha</ControlLabel>
              <FormControl
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" type="submit">
              Alterar
            </Button>
          </form>
        </div>

      </div>
    </div>
    
  );
}