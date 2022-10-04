import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [userName, setUserName] = useState([])

  useEffect(()=>{
    Axios.get('https://login-system-user-management.herokuapp.com/users').then((response)=>{
        setUserName(response.data);
    })
}, [])

  return (
    <div className="App">
      <h1>test</h1>
      {userName.map((val, index)=>{
            return(
                <div className='monggo-val-wrapper' key={index}>
                    <h4>{val.name} test</h4>
                </div>
            )
        })}
    </div>
  );
}

export default App;
