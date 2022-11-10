import React, {useContext} from 'react'
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
  return (
    <div className="navbar">
      <Link to="/profile">{username[0].toUpperCase() + username.slice(1).toLowerCase()}'s <br/> Profile</Link>
      <Link to="/newentry">New Entry</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar