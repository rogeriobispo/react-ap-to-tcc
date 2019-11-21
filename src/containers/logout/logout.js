import React from "react";
import "./Logout.css";
import Layout from "../layout";

export default function Logout() {
  return (
    <Layout isAuthenticated={  false } >
    <div className="logout">
      <div className="lander">
        <h1>Rogério ReactApp</h1>
        <p>Obrigado Volte sempre</p>
      </div>
    </div>
    </Layout>
  );
}