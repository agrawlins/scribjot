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

  const [viewToggle, setViewToggle] = useState(true)

  useEffect(() => {
    getUserEntries()
  }, [])

  const [selectedEntry, setSelectedEntry] = useState(entries.length)

  const goToNextEntry = () => {
    if(selectedEntry === entries.length - 1){
      setSelectedEntry(0)
    } else {
      setSelectedEntry(nextEntry => nextEntry + 1)
    }
    console.log(entries[selectedEntry].text)
  }

  const goToPreviousEntry = () => {
    if(selectedEntry === 0){
      setSelectedEntry(entries.length - 1)
    } else {
      setSelectedEntry(prevEntry => prevEntry - 1)
    }
    console.log(entries[selectedEntry].text)
  }


  return (
    <div className="profile">
      <h1>Welcome, {username[0].toUpperCase() + username.slice(1).toLowerCase()}!</h1>
      {viewToggle ?
      <>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to List View</button>
        <h1>{entries[selectedEntry].text}</h1>
        <div>
          <button onClick={() => goToPreviousEntry()}>PREV</button>
          <button onClick={() => goToNextEntry()}>NEXT</button>
        </div>
        <h1>Entry # {selectedEntry + 1}</h1>
      </>
      :
      <>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to Page View</button>
        <EntryList entries={entries}/>
      </>
      }
    </div>
  )
}

export default Profile