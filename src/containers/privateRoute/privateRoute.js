import React from "react";
import { isAuthenticated, logout } from "../../services/authentication/auth"
import { Route, Redirect } from "react-router-dom";
import PrivateLayout from "../layout/privateLayout";

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