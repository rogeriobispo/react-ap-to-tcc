import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import UsuarioForm from './containers/UsuarioForm/UsuarioForm'
import NotFound from "./containers/NotFound/NotFound";
import Login from './containers/Login/Login';
import Logout from './containers/logout/logout'
import PrivateRoute from "./containers/privateRoute/privateRoute";
import UsuarioList from "./containers/UsuarioList/Usuariolist";
import TrocaSenha from './containers/TrocaSenha/TrocaSenha'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/logout" exact component={Logout}/>
      <PrivateRoute path="/home" exact component={Home} />
      <PrivateRoute path="/usuarioForm" exact component={UsuarioForm} />
      <PrivateRoute path="/usuarioList" exact component={UsuarioList} />
      <PrivateRoute path={`/usuario/:id`} exact component={TrocaSenha} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
    
  );
}
