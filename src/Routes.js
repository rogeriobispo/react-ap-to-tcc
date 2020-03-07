import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import CriarUsuario from './containers/Usuario/Form/Criar'
import EditarUsuario from './containers/Usuario/Form/Editar'
import PrivateRoute from "./containers/privateRoute/privateRoute";
import UsuarioList from "./containers/Usuario/List"
import MedicoList from "./containers/Medico/List"
import CriarPaciente from './containers/Paciente/Form/Criar'

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
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/usuario" component={CriarUsuario} />
            <PrivateRoute exact path="/usuario/password" component={TrocaSenha} />
            <PrivateRoute exact path="/usuario/:id" component={EditarUsuario} />
            <PrivateRoute exact path="/usuarioList" component={UsuarioList} />
            <PrivateRoute exact path="/medicoList" component={MedicoList} />
            <PrivateRoute exact path="/paciente" component={CriarPaciente} />
            <PrivateRoute exact path="*" component={NotFound} />
            <Route path="*" component={NotFound} />

         </Switch>
      </BrowserRouter>

   )
}


// function notAutorized(){
//   
// }