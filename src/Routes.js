import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import UsuarioForm from './containers/UsuarioForm/UsuarioForm'
import PrivateRoute from "./containers/privateRoute/privateRoute";
import UsuarioList from "./containers/UsuarioList/Usuariolist";
import MedicoList from "./containers/MedicoList/MedicoList";

import TrocaSenha from './containers/TrocaSenha/TrocaSenha';
import NotFound from "./containers/NotFound/NotFound";
import Logout from './containers/logout/logout';
import Login from './containers/Login/Login';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/usuarioForm" exact component={UsuarioForm} />
            <PrivateRoute path="/usuarioList" exact component={UsuarioList} />
            <PrivateRoute path="/medicoList" exact component={MedicoList} />
            <PrivateRoute path={"/usuario/password"} exact component={TrocaSenha} />
            <PrivateRoute path="*" component={NotFound} />
            <Route path="*" component={NotFound} />

         </Switch>
      </BrowserRouter>

   )
}


// function notAutorized(){
//   
// }