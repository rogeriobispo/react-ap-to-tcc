import React from "react"
import "./Logout.css"
import PrivateLayout from "../layout/privateLayout"

export default function Logout() {
  return (
    <PrivateLayout isAuthenticated={  false } >
    <div className="logout">
      <div className="lander">
        <h1>Rogério ReactApp</h1>
        <p>Obrigado Volte sempre</p>
      </div>
    </div>
    </PrivateLayout>
  );
}