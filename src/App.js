import React, { useState } from 'react';
import './App.css';
import Login from './Screens/Login/Login';
import Screens from './Screens/Screens';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setLoggedIn(!loggedIn)}>Toggle</button>
      { loggedIn ? <Screens /> : <Login />}
    </div>
  );
}

export default App;
