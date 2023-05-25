import React, {useState, useContext} from 'react'
import { UserContext } from '../../context/UserProvider.js'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
  const {logout} = props
  const {
    user: {
      username
    }
  } = useContext(UserContext)

  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="navbar">
        { !toggle ?
        <>
          <button onClick={() => setToggle(!toggle)}>
            <div className='hamburger'/>
            <div className='hamburger'/>
            <div className='hamburger'/>
          </button>
        </>
        :
        <ul className='dropdown'>
          <button onClick={() => setToggle(!toggle)}>Collapse</button>
          <button onClick={() => navigate('../profile')}>
            Profile
          </button>
          <button onClick={() => navigate('../newentry')}>
            New Entry
          </button>
          <button className='logout' onClick={logout}>Logout</button>
        </ul>
      }
      <h1>SCRIBJOT</h1>
      <p>Logged in as: <br/>{username[0].toUpperCase() + username.slice(1).toLowerCase()}</p>
    </div>
  )
}

export default Navbar