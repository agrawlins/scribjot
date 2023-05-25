import React, { useState, useContext } from 'react'
import AuthForm from '../AuthForm/AuthForm.js'
import { UserContext } from '../../../context/UserProvider.js'


const initInputs = { username: "", password: "" }

const Auth = () => {
  const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)
  
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className="auth-container">
      <h1>SCRIBJOT</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            toggle={toggle}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <button className='toggleButton' onClick={toggleForm}>Not a member?<br/>Click Here to Signup</button>
        </>
        :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            toggle={toggle}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
          <button className='toggleButton' onClick={toggleForm}>Already a member? <br/>Click Here to Login</button>
        </>
      }
    </div>
  )
}

export default Auth