import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from 'react-router'

import AuthClient from "../../services/authentication/AuthClient"
import { user } from '../../services/authentication/auth'
import "./TrocaSenha.css";

export default function TrocaSenha(props){
    const [password1, setpassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [redir, setRedir] = useState(false)
  
  
  function validateForm() {
    return  password1 !== password2
  }

 async function  handleSubmit(event) {
    event.preventDefault()
    if(validateForm()){ 
      window.flash('As Senhas sâo diferentes', 'error')
      return
    }
    try {
        await AuthClient.post("/users/password", 
        { "userName": user().userName, 	"newPassword": password1 })
       
         window.flash(`Senha alterada com sucesso`, 'success')
         setRedir(true)
         
        } catch (e) {
      console.log(e)
      window.flash(`Não foi possivel alterar o password`, 'error')
    }
    
  }
  if(redir) return <Redirect to="/home" />
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
    )
  
}