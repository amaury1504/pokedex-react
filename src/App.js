import React, { Component } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";
import Background from "./backroung-pattern.jpg";

class App extends Component{
  render(){
    return(
      <div className={"App"} style={{background: `url(${Background})`}}>
        <NavBar/>
        <div className={"container"}>
            <Dashboard/>
        </div>
      </div>
    )
  }
}

  

export default App;