import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { userRegInfo } from '../../features/userReg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  const apiLink = 'https://login-system-backend.onrender.com';
  const dispatch = useDispatch();
  const [emptyFirstname, setEmptyFirstname] = useState(false)
  const [emptyLastname, setEmptyLastname] = useState(false)
  const [emptyPass, setEmptyPass] = useState(false)
  const [emptyEmail, setEmptyEmail] = useState(false)

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const firstnameChange = (e) => {
    setFirstname(e.target.value);
    if(firstname===""){setEmptyFirstname(true)}else{setEmptyFirstname(false)}
  }
  const lastnameChange = (e) => {
    setLastname(e.target.value);
    if(lastname===""){setEmptyLastname(true)}else{setEmptyLastname(false)}
  }
  const emailChange = (e) => {
    setEmail(e.target.value);
    if(email===""){setEmptyEmail(true)}else{setEmptyEmail(false)}
  }
  const passChange = (e) => {
      setPass(e.target.value);
      if(pass===""){setEmptyPass(true)}else{setEmptyPass(false)}
  }

  function Register(e) {
    e.preventDefault();
    if(pass===""||email===""||firstname===""||lastname===""){
      if(pass===""){setEmptyPass(true)}
      if(email===""){setEmptyEmail(true)}
      if(firstname===""){setEmptyFirstname(true)}
      if(lastname===""){setEmptyLastname(true)}
    }else{
        if(validateEmail(email)===null){setEmptyEmail(true)
        }else{
          Axios.post(`${apiLink}/users`,{
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: pass,
          })
          dispatch(userRegInfo({firstname, lastname, email, password: pass,}))
        }
    }
  }
  return (
    <div>
        <div className='login-wrapper form-wrapper-outer'>
            <div className='form-wrapper'>
                <h2>Register</h2>
                <form>
                    <div className='rw-inner'>
                        <div className='form-input'>
                            <input className={emptyFirstname ? 'empty-fields' : ''} onChange={firstnameChange} name="firstname" type="text" placeholder="First Name" aria-label="First Name" />
                        </div>
                        <div className='form-input'>
                            <input className={emptyLastname ? 'empty-fields' : ''} onChange={lastnameChange} name="lastname" type="text" placeholder="Last Name" aria-label="Last Name" />
                        </div>
                        <div className='form-input'>
                            <input className={emptyEmail ? 'empty-fields' : ''} onChange={emailChange} name="email" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>
                        <div className='form-input'>
                            <input className={emptyPass ? 'empty-fields' : ''} onChange={passChange} name="password" type="password" autoComplete="off" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className='form-submit'>
                            <button type="submit" onClick={(e)=>Register(e)}>Register</button>
                        </div>
                        <p className='t-center'>Already have an account? <Link to="/login" className='link-style'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register