import React from 'react'
import "./Entry.css"

const Entry = (props) => {
  // const { text, description, imgUrl, _id} = props
  const { text, creationDate } = props
  return (
    <div className="entry">
      <h1>{creationDate}</h1>
      <h1>{text}</h1>
    </div>
  )
}

export default Entry