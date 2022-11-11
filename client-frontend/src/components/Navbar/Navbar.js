import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider.js'
import './Navbar.css'

const Navbar = (props) => {
  const {logout} = props
  const {
    user: {
      username
    }
  } = useContext(UserContext)

  const [toggle, setToggle] = useState(false)


  return (
    <div className="navbar">
      <button onClick={() => setToggle(!toggle)}>
        <div className='hamburger'/>
        <div className='hamburger'/>
        <div className='hamburger'/>
      </button>
      { !toggle ?
        <>
          SCRIBJOT
        </>
        :
        <>
          <Link to="/profile">Profile</Link>
          SCRIBJOT
          <Link to="/newentry">New Entry</Link>
        </>
      }
      <div>
        Logged in as: <br/>{username[0].toUpperCase() + username.slice(1).toLowerCase()}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar