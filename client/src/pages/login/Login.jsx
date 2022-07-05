import { Link } from "react-router-dom"
import "./login.css"
import axios from "axios"
import React, { useContext, useRef, userRef} from 'react'
// import { Context } from "../../context/Context"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  // const { user, dispatch, isFetching } = useContext(Context);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // dispatch({ type: "LOGIN_START"})
    try{
      const url = "http://localhost:8080/auth/login"
      const res = await axios.post(url, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      // dispatch({ type: "LOGIN_SUCCESS"})
    } catch(error) {
      console.log(error)
      // dispatch({ type: "LOGIN_FAILURE"})
    }
  }

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              type="text" 
              className= "loginInput" 
              placeholder="Enter your email..."
              ref={userRef}
            />
            <label>Password</label>
            <input 
              type="password" 
              className= "loginInput" 
              placeholder="Enter your password..."
              ref={passwordRef}
            />
            <button className="loginLoginButton" type="submit">Login</button>
        </form>
        <button className="loginRegisterButton">
            <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
