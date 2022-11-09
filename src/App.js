import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Screens from './Screens/Screens';
import Authenticate from './Authenticate/Authenticate';
import Axios from 'axios';
import { loginStatRed } from './features/loginStatus'

function App() {
  const loginStatus = useSelector((state)=>state.loginStatusReducers.value)
  const apiLink = 'https://login-system-backend.onrender.com'
  const dispatch = useDispatch();
  const userID = localStorage.getItem('userID')

  useEffect(()=>{
      Axios.get(`${apiLink}/users/${userID}`).then((response)=>{
        if(response.data.name!==null||response.data.name!==''){
          dispatch(loginStatRed(true))
        }
      })
  })

  return (
    <div className="App">
      <Router>
          {loginStatus
            ? <Screens />
            : <Authenticate />
          }
      </Router>
    </div>
  );
}

export default App;
