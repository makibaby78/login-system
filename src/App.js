import React, { useState } from 'react';
import './App.css';
import Login from './Screens/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Screens from './Screens/Screens';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setLoggedIn(!loggedIn)}>Toggle</button>
      <Router>
      { loggedIn ? <Screens /> : <Login />}
      </Router>
    </div>
  );
}

export default App;
