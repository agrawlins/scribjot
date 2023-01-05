import React, {useState, useContext, useEffect} from 'react'
import Entry from './Entry/Entry.js'
import EntryList from './EntryList/EntryList.js'
import { UserContext } from '../../context/UserProvider.js'
import "./Profile.css"
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

  const text = entries[selectedEntry]?.text
  const creationDate = entries[selectedEntry]?.creationDate

  useEffect(() => {
    getUserEntries()
  }, [])

  //Used to Navigate on Page View

  const goToNextEntry = () => {
    if(selectedEntry >= (entries?.length - 1)){
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
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to List View</button> <br/>
        <Entry
          _id = {entries[selectedEntry]?._id}
          text = {text || "Loading..."}
          creationDate = {creationDate || "Loading..."}
        />
        <div className='navButtons'>
          <button className='prevButton' onClick={() => goToPreviousEntry()} disabled={prevDisabled}>PREV</button>
          <h1>Page {selectedEntry + 1}</h1>
          <button className='nextButton' onClick={() => goToNextEntry()} disabled={nextDisabled}>NEXT</button>
        </div>
      </div>
      :
      <div>
        <button onClick={() => setViewToggle(!viewToggle)}>Switch to Page View</button>
        <EntryList entries={entries}/>
      </div>
      }
    </div>
  )
}

export default Profile