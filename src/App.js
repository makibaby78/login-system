import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Screens from './Screens/Screens';
import Authenticate from './Authenticate/Authenticate';

function App() {
  const loginStatus = useSelector((state)=>state.loginStatusReducers.value)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(loginStatus)
  },[loginStatus])
  

  return (
    <div className="App">
      <button onClick={()=>setLoggedIn(loggedIn)}>Toggle</button>
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
