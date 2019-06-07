import React from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes"


import './App.css';


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
     </div> 
      <Link to="/" className="links"></Link>
      <Link to="/wizard" className="links"></Link>

      {routes}
    
    </HashRouter>
  );
}

export default App;
