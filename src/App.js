import React, { Component } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <NavBar/>
        <div className={"container"}>
            <Dashboard/>
        </div>
      </BrowserRouter>
    )
  }
}

  

export default App;