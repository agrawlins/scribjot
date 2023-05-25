import React from 'react'
import './AuthForm.css'

const AuthForm = (props) => {
  const {
    handleChange, 
    handleSubmit, 
    btnText,
    errMsg,
    toggle,
    inputs: {
      email,
      username, 
      password
    } 
  } = props
  
  return (
    <>
    {toggle?
      <form className='auth-form' onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          name="email" 
          onChange={handleChange} 
          placeholder="Email Address"/>
        <input 
          type="text" 
          value={username} 
          name="username" 
          onChange={handleChange} 
          placeholder="Username"/>
        <input 
          type="password"
          value={password} 
          name="password" 
          onChange={handleChange} 
          placeholder="Password"/>
        <button>{ btnText }</button>
        <p style={{color: "red"}}>{errMsg}</p>
      </form>
    :
      <form className='auth-form' onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          name="username" 
          onChange={handleChange} 
          placeholder="Username"/>
        <input 
          type="password" 
          value={password} 
          name="password" 
          onChange={handleChange} 
          placeholder="Password"/>
        <button>{ btnText }</button>
        <p style={{color: "red"}}>{errMsg}</p>
      </form>
    }
  </>
  )
}

export default AuthForm