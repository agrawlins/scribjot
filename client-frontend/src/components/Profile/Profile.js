import React, {useState, useContext, useEffect} from 'react'
import EntryList from './EntryList/EntryList.js'
import { UserContext } from '../../context/UserProvider.js'
import "./Profile.css"
// import axios from 'axios'
// import searchIcon from '../../images/search-icon.jpg'

const Profile = () => {
  const {
    user: {
      username
    }, 
    getUserEntries, 
    entries
  } = useContext(UserContext)
  const [viewToggle, setViewToggle] = useState(true)
  const [selectedEntry, setSelectedEntry] = useState(entries.length)
  // const [time, setTime] = useState("")
  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(false)


  useEffect(() => {
    getUserEntries()
    console.log(entries)
    console.log(entries[selectedEntry]?.text)
  }, [])


  const getCurrentTime = () => {
    
  }


  //Used to Navigate on Page View

  const handleChange = () => {
    if(selectedEntry === (entries[selectedEntry].length - 1)){
      setNextDisabled(true)
    } else if(selectedEntry === 0){
      setPrevDisabled(true)
    } else {
      setNextDisabled(false)
      setPrevDisabled(false)
    }
  }

  const goToNextEntry = () => {
    if(selectedEntry === (entries?.length - 1)){
      setNextDisabled(true)
    } else {
      setSelectedEntry(nextEntry => nextEntry + 1)
      setPrevDisabled(false)
    }
  }

  const goToPreviousEntry = () => {
    if(selectedEntry === 0){
      setPrevDisabled(true)
    } else {
      setNextDisabled(false)
      setSelectedEntry(prevEntry => prevEntry - 1)
    }
  }


  //Used to Isolate Entries
  // const [filteredEntries, setFilteredEntries] = useState([])

  // const handleFilter = (e) => {
  //   if(e.target.value === "reset"){
  //     getUserEntries()
  //   } else {
  //     axios.get(`/profile/search/creationDate?creationDate=${e.target.value}`)
  //       .then(res => setFilteredEntries(res.data))
  //       .catch(err => console.log(err))
  //   }
  // }

 


  return (
    <div className="profile"> 
      <h1>Welcome, {username[0].toUpperCase() + username.slice(1).toLowerCase()}!</h1>
      {viewToggle?
      <div>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to List View</button>
        <h1>{entries[selectedEntry]?.text}</h1>
        <h1>Page {selectedEntry + 1}</h1>
        <div>
          <button onClick={() => goToPreviousEntry()} disabled={prevDisabled}>PREV</button>
          <button onClick={() => goToNextEntry()} disabled={nextDisabled}>NEXT</button>
        </div>
      </div>
      :
      <>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to Page View</button>
        {/* <form onSubmit={handleFilter}>
          <h4>Filter by Date</h4>
          <select className="filter-form">
            <option value="reset">Select Date Range</option>
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <input          
            type="text"
          >
          </input>
          <button>
            <img src={searchIcon}/>
          </button>
        </form> */}
        <EntryList entries={entries}/>
      </>
      }
    </div>
  )
}

export default Profile