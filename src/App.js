import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      
      
      <Route path="/login" exact component={Login} />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
