import React, {useContext} from 'react'
import EntryForm from './EntryForm/EntryForm.js'
import { UserContext } from '../context/UserProvider.js'

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
      <h3>Create a New Entry</h3>
      <EntryForm addEntry = {addEntry}/>
    </div>
  )
}

export default NewEntry