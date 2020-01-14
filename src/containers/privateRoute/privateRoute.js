import React from "react";
import PrivateLayout from "../layout/privateLayout";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated, logout } from "../../services/authentication/auth"

export default function PrivateRoute(props) {
  function handleLogout() {
    logout()
  }
  

  const { component: Component, ...rest } = props

   return (
         
    <PrivateLayout handleLogout={handleLogout} isAuthenticated={  isAuthenticated() } >
      <Route { ...rest } exact render={ () => isAuthenticated() ?  <Component { ...props } onLogout={ () => { }  }  /> :  <Redirect
            to={{ pathname: '/login' }}
            /> } />
    </PrivateLayout> 
  

  );
}