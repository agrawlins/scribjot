import React, {useState} from 'react'
import Entry from '../Entry/Entry.js'
import "./EntryList.css"

const EntryList = (props) => {
  const {entries} = props

  return (
    <div className="entry-list">
      {entries.map(entry => 
        <Entry {...entry} 
          key={entry._id}
          // data = {entries}
        />).reverse()}
    </div>
  )
}

export default EntryList