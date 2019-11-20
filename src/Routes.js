import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import NotFound from "./containers/NotFound/NotFound";
import Login from './containers/Login/Login';
import Logout from './containers/logout/logout'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/logout" exact component={Logout}/>
      <Route path="/login" exact component={Login} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
    
  );
}
