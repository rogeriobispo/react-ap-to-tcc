import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import CriarUsuario from './containers/Usuario/Form/Criar'
import EditarUsuario from './containers/Usuario/Form/Editar'
import PrivateRoute from "./containers/privateRoute/privateRoute";
import UsuarioList from "./containers/Usuario/List"
import MedicoList from "./containers/Medico/List"

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
            <PrivateRoute path="/usuario" exact component={CriarUsuario} />
            <PrivateRoute path="/usuario/:id" exact component={EditarUsuario} />
            <PrivateRoute path="/usuarioList" exact component={UsuarioList} />
            <PrivateRoute path="/medicoList" exact component={MedicoList} />
            <PrivateRoute path="/usuario/password" exact component={TrocaSenha} />
            <PrivateRoute path="*" component={NotFound} />
            <Route path="*" component={NotFound} />

         </Switch>
      </BrowserRouter>

   )
}


// function notAutorized(){
//   
// }