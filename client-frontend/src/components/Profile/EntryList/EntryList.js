import React, {useState} from 'react'
import Entry from '../Entry/Entry.js'
import "./EntryList.css"

const EntryList = (props) => {
  const {entries} = props
  const [selectedEntry, setSelectedEntry] = useState(0)

  const goToNextEntry = () => {
    if(selectedEntry === entries.length){
      setSelectedEntry(0)
    } else {
      setSelectedEntry(nextEntry => nextEntry + 1)
    }
  }

  const goToPreviousEntry = () => {
    if(selectedEntry === 0){
      setSelectedEntry(entries.length)
    } else {
      setSelectedEntry(prevEntry => prevEntry - 1)
    }
  }
//   const goToNextEntry = () => {
//     tempSelectedEntry++;
//     if(tempSelectedEntry === entries.length){
//         tempSelectedEntry = 0;
//     }
//     setSelectedEntry({
//         selectedEntry: tempSelectedEntry
//     });
// }

// const goToPreviousEntry = () => {
//     tempSelectedEntry--;
//     if(tempSelectedEntry < 0)
//         tempSelectedEntry = entries.length -1;
//     setSelectedEntry({tempSelectedEntry});
// }
  return (
    <div className="entry-list">
      {entries.map(entry => <Entry {...entry} key={entry._id}/>)}
      {/* <div>
        <button onClick={() => goToPreviousEntry}>Prev</button>
        <button onClick={() => goToNextEntry}>Next</button> 
      </div> */}
    </div>
  )
}

export default EntryList