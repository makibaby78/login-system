import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Screens from './Screens/Screens';
import Authenticate from './Authenticate/Authenticate';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setLoggedIn(!loggedIn)}>Toggle</button>
      <Router>
          {loggedIn
            ? <Screens />
            : <Authenticate />
          }
      </Router>
    </div>
  );
}

export default App;
