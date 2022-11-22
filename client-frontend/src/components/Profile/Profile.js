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

  const creationYear = entries[selectedEntry]?.creationDate.slice(0, 4)
  const creationMonth = entries[selectedEntry]?.creationDate.slice(5, 7)
  const creationDay = entries[selectedEntry]?.creationDate.slice(8, 10)
  const creationHour = entries[selectedEntry]?.creationDate.slice(11, 13)
  const creationMinute = entries[selectedEntry]?.creationDate.slice(14, 16)

  let month
  switch (creationMonth) {
    case "01":
      month = "January"
      break;
    case "02":
      month = "February"
      break;
    case "03":
      month = "March"
      break;
    case "04":
      month = "April"
      break;
    case "05":
      month = "May"
      break;
    case "06":
      month = "June"
      break;
    case "07":
      month = "July"
      break;
    case "08":
      month = "August"
      break;
    case "09":
      month = "September"
      break;
    case "10":
      month = "October"
      break;
    case "11":
      month = "November"
      break;
    case "12":
      month = "December"
      break;
    default:
      break;
  }


  useEffect(() => {
    getUserEntries()
  }, [])


  const getCurrentTime = () => {
    
  }


  //Used to Navigate on Page View

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
        <h2>{month} {creationDay}, {creationYear}, at {creationHour}:{creationMinute}</h2> <br/>
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