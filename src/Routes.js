import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router'

import Home from './containers/Home/Home';
import UsuarioForm from './containers/UsuarioForm/UsuarioForm'
import NotFound from "./containers/NotFound/NotFound";
import NotAutorized from './containers/NotAutorized/NotAutorized'
import Login from './containers/Login/Login';
import Logout from './containers/logout/logout'
import PrivateRoute from "./containers/privateRoute/privateRoute";
import UsuarioList from "./containers/UsuarioList/Usuariolist";
import TrocaSenha from './containers/TrocaSenha/TrocaSenha'
import { isAuthenticated } from './services/authentication/auth'

export default function Routes() {
 
   return (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/logout" exact component={Logout}/> 
        <Route path='/notAutorized' component={NotAutorized}/>
        { !isAuthenticated() ? <Redirect to="/notAutorized" /> : console.log('Autenticado') }
        <PrivateRoute path="/home" exact component={Home} /> 
        <PrivateRoute path="/usuarioForm" exact component={UsuarioForm} />
        <PrivateRoute path="/usuarioList" exact component={UsuarioList} />
        <PrivateRoute path={"/usuario/password"} exact component={TrocaSenha} />
        <Route component={NotFound} />    
     </Switch>
    
  ) 
}


// function notAutorized(){
//   
// }