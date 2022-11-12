import React, {useState} from 'react'
import Entry from '../Entry/Entry.js'
import "./EntryList.css"

const EntryList = (props) => {
  const {entries} = props

  const [selectedEntry, setSelectedEntry] = useState(entries.length)

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

  console.log(selectedEntry)

  return (
    <div className="entry-list">
      {/* {entries[selectedEntry]} */}
      {/* {(entry => <Entry {...entry} key={entry._id}/>)} */}
      {entries.map(entry => <Entry {...entry} key={entry._id}/>).reverse()}
    </div>
  )
}

export default EntryList