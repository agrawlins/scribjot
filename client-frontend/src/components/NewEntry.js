import React, {useContext} from 'react'
import EntryForm from './EntryForm/EntryForm.js'
import { UserContext } from '../context/UserProvider.js'
import './NewEntry.css'

// import EntryList from './EntryList.js'
// import Entry from './Entry.js'

const NewEntry = () => {
  const {
    user: {
      username
    }, 
    addEntry, 
    entries
  } = useContext(UserContext)
  return (
    <div className="newEntry">
      <h1>Create a New Entry</h1> <br/>
      <EntryForm addEntry = {addEntry}/>
    </div>
  )
}

export default NewEntry