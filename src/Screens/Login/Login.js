import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginStatRed } from '../../features/loginStatus'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './login.css'

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [emptyPass, setEmptyPass] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const navigate = useNavigate()

    const apiLink = 'https://login-system-backend.onrender.com';

    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };
    const emailChange = (e) => {
        setEmail(e.target.value);
        if(email===""){setEmptyEmail(true)}else{setEmptyEmail(false)}
    }
    const passChange = (e) => {
        setPass(e.target.value);
        if(pass===""){setEmptyPass(true)}else{setEmptyPass(false)}
    }
    function Login(e) {
        e.preventDefault();
        if(pass===""||email===""){
            if(pass===""){setEmptyPass(true)}
            if(email===""){setEmptyEmail(true)}
        }else{
            if(validateEmail(email)===null){setEmptyEmail(true)
            }else{
                Axios.get(`${apiLink}/users/email/${email}/${pass}`).then((response) => {
                    if(response.data.matched===true){
                        localStorage.setItem('userID', response.data._id)
                        dispatch(loginStatRed(true))
                        navigate('/admin')
                    }else{
                        console.log("invalid credentials")
                    }
                });
            }
        }
      }
  return (
    <div>
        <div className='login-wrapper form-wrapper-outer'>
            <div className='form-wrapper'>
                <h2>Login Into Your Account</h2>
                <form>
                    <div className='rw-inner'>
                        <div className='form-input'>
                            <input className={emptyEmail ? 'empty-fields' : ''} onChange={emailChange} name="email" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>
                        <div className='form-input'>
                            <input className={emptyPass ? 'empty-fields' : ''} onChange={passChange} name="password" type="password" autoComplete="off" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className='form-submit'>
                            <button type="submit" onClick={(e)=>Login(e)}>Login</button>
                        </div>
                        <p className='t-center'>Don't have an account? <Link to="/register" className='link-style'>Register here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login