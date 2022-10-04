import React, { useState } from 'react';
import Admin from './Screens/Admin/Admin';
import './App.css';
import Login from './Screens/Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setLoggedIn(!loggedIn)}>Toggle</button>
      { loggedIn ? <Admin /> : <Login />}
    </div>
  );
}

export default App;
