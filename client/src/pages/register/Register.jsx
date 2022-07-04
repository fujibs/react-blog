import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {
  const [displayName, setDisplayName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [hasError, setError] = useState(false)

  const handleSubmit = async (e)=>{
    setError(false)
    e.preventDefault()
    try {
      const url = "http://localhost:8080/api/auth/register"
      const res = await axios.post(url, {
        displayName ,
        email,
        password,
      })
      res.data && window.location.assign("/login")
    } catch (error) {
      setError(true)
      console.log(error)
    }

    if (hasError) {
      return <p> Registration failed </p>
    }
  }

  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm" onSubmit={handleSubmit}>
      <label>Display Name</label>
        <input 
          type="text" 
          className= "registerInput" 
          placeholder="Enter your display name..."
          onChange={e=>setDisplayName(e.target.value)}
        />
      <label>Email</label>
            <input 
              type="text" 
              className= "registerInput" 
              placeholder="Enter your email..."
              onChange={e=>setEmail(e.target.value)}
              />
            <label>Password</label>
            <input 
              type="password" 
              className= "registerInput" 
              placeholder="Enter your password..."
              onChange={e=>setPassword(e.target.value)}
              />
            <button className="registerRegisterButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
        {hasError && <span className="registerFailedText">Registration failed</span>}
    </div>
  )
}
