import React, {useState, useContext, useEffect} from 'react'
import EntryList from './EntryList/EntryList.js'
import axios from 'axios'
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
  const [selectedEntry, setSelectedEntry] = useState(entries.length - 1)
  const [time, setTime] = useState("")


  useEffect(() => {
    getUserEntries()
    console.log(entries)
    console.log(entries.length)
  }, [])


  const getCurrentTime = () => {
    
  }


  //Used to Navigate on Page View


  const goToNextEntry = () => {
    if(selectedEntry === entries.length - 1){
      setSelectedEntry(0)
    } else {
      setSelectedEntry(nextEntry => nextEntry + 1)
    }
  }

  const goToPreviousEntry = () => {
    if(selectedEntry === 0){
      setSelectedEntry(entries.length - 1)
    } else {
      setSelectedEntry(prevEntry => prevEntry - 1)
    }
  }


  //Used to Isolate Entries
  const [filteredEntries, setFilteredEntries] = useState([])

  const handleFilter = (e) => {
    if(e.target.value === "reset"){
      getUserEntries()
    } else {
      axios.get(`/profile/search/creationDate?creationDate=${e.target.value}`)
        .then(res => setFilteredEntries(res.data))
        .catch(err => console.log(err))
    }
  }

 


  return (
    <div className="profile"> 
      <h1>Welcome, {username[0].toUpperCase() + username.slice(1).toLowerCase()}!</h1>
      {viewToggle ?
      <>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to List View</button>
        <h1>{entries[selectedEntry].text}</h1>
        <h1>Entry # {selectedEntry + 1}</h1>
        <div>
          <button onClick={() => goToPreviousEntry()}>PREV</button>
          <button onClick={() => goToNextEntry()}>NEXT</button>
        </div>
      </>
      :
      <>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to Page View</button>
        <h4>Filter by Date</h4>
        <select onChange={handleFilter} className="filter-form">
          <option value="reset">Select Date Range</option>
          <option value="24">Day</option>
          <option value="168">Week</option>
          <option value="crafts">Month</option>
          <option value="electronics">Year</option>
        </select>
        <EntryList entries={entries}/>
      </>
      }
    </div>
  )
}

export default Profile