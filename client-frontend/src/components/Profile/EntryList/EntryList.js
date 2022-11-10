import React from 'react'
import Entry from '../Entry/Entry.js'

const EntryList = (props) => {
  const {entries} = props
  return (
    <div className="entry-list">
      {entries.map(entry => <Entry {...entry} key={entry._id}/>)}
    </div>
  )
}

export default EntryList