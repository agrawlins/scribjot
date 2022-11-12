import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
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
      <button onClick={() => setToggle(!toggle)}>
        <div className='hamburger'/>
        <div className='hamburger'/>
        <div className='hamburger'/>
        { !toggle ?
        <>
        </>
        :
        <ul className='dropdown'>
          <button onClick={() => navigate('../profile')}>
            Profile
          </button>
          <button onClick={() => navigate('../newentry')}>
            New Entry
          </button>
        </ul>
      }
      </button>
      SCRIBJOT
      <div>
        Logged in as: <br/>{username[0].toUpperCase() + username.slice(1).toLowerCase()}
        <button className='logout' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar