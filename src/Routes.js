import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router'

import Home from './containers/Home/Home';
import UsuarioForm from './containers/UsuarioForm/UsuarioForm'
import PrivateRoute from "./containers/privateRoute/privateRoute";
import NotAutorized from './containers/NotAutorized/NotAutorized';
import { isAuthenticated } from './services/authentication/auth';
import UsuarioList from "./containers/UsuarioList/Usuariolist";
import MedicoList from "./containers/MedicoList/MedicoList";

import TrocaSenha from './containers/TrocaSenha/TrocaSenha';
import NotFound from "./containers/NotFound/NotFound";
import Logout from './containers/logout/logout';
import Login from './containers/Login/Login';

export default function Routes() {
 
   return (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/logout" exact component={Logout}/> 
        <Route path='/notAutorized' component={NotAutorized}/>
        <PrivateRoute path="/home" exact component={Home} /> 
        <PrivateRoute path="/usuarioForm" exact component={UsuarioForm} />
        <PrivateRoute path="/usuarioList" exact component={UsuarioList} />
        <PrivateRoute path="/medicoList" exact component={MedicoList} />
        <PrivateRoute path={"/usuario/password"} exact component={TrocaSenha} />
        <Route component={NotFound} />    
        { !isAuthenticated() ? <Redirect to="/notAutorized" /> : '' }
     </Switch>
    
  ) 
}


// function notAutorized(){
//   
// }