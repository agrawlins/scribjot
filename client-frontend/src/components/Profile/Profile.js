import React, {useState, useContext, useEffect} from 'react'
import EntryList from './EntryList/EntryList.js'
import Entry from './Entry/Entry.js'
import { UserContext } from '../../context/UserProvider.js'
import "./Profile.css"

const Profile = () => {
  const {
    user: {
      username
    }, 
    getUserEntries, 
    entries
  } = useContext(UserContext)

  useEffect(() => {
    getUserEntries()
  }, [])

  return (
    <div className="profile">
      <h1>Welcome {username}</h1>
      <h3>Your Entries</h3>
      <EntryList entries={entries}/>
    </div>
  )
}

export default Profile