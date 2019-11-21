import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import NotFound from "./containers/NotFound/NotFound";
import Login from './containers/Login/Login';
import Logout from './containers/logout/logout'
import PrivateRoute from "./containers/privateRoute/privateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/logout" exact component={Logout}/>
      <PrivateRoute path="/home" exact component={Home} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
    
  );
}
