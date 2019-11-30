import React from "react";

import "./App.css";
import Routes from "./Routes";
import Bus from '../src/utils/Bus';
import { Flash } from '../src/containers/message'

window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));


function App(props) {
   return (
    <div className="App container">
      <Flash/>
      <Routes/>
    </div>
  );
}

export default App;