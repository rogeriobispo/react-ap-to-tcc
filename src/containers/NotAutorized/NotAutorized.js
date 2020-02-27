import React from "react";
import "./NotAutorized.css";

import PublicLayout from '../layout/publicLayout'

export default function NotAutorized() {
  return (
    <PublicLayout isAuthenticated={false} >
      <div className="NotAutorized">
        <h3>Acesso não autorizada</h3>
      </div>
    </PublicLayout>
  );
}