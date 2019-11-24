import React from "react"
import "./Logout.css"
import PublicLayout from "../layout/publicLayout"

export default function Logout() {
  return (
    <PublicLayout isAuthenticated={  false } >
    <div className="logout">
      <div className="lander">
        <h1>Rogério ReactApp</h1>
        <p>Obrigado Volte sempre</p>
      </div>
    </div>
    </PublicLayout>
  );
}