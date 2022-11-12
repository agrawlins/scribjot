import React from 'react'
import "./Entry.css"

const Entry = (props) => {
  // const { text, description, imgUrl, _id} = props
  const { text, creationDate } = props
  const creationYear = creationDate.slice(0, 4)
  const creationMonth = creationDate.slice(5, 7)
  const creationDay = creationDate.slice(8, 10)
  const creationHour = creationDate.slice(11, 13)
  const creationMinute = creationDate.slice(14, 16)

  return (
    <div className="entry">
      <h1>{creationMonth}/{creationDay}/{creationYear}, at {creationHour}:{creationMinute}</h1> <br/>
      <h1>{text}</h1>
    </div>
  )
}

export default Entry