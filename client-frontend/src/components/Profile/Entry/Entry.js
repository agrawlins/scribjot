import React, {useState} from 'react'
import "./Entry.css"

const Entry = (props) => {
  // const { text, description, _id} = props
  const { text, creationDate } = props
  const creationYear = creationDate.slice(0, 4)
  const creationMonth = creationDate.slice(5, 7)
  const creationDay = creationDate.slice(8, 10)
  const creationHour = creationDate.slice(11, 13)
  const creationMinute = creationDate.slice(14, 16)

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

  return (
    <div className="entry">
      <h2>{month} {creationDay}, {creationYear}, at {creationHour}:{creationMinute}</h2> <br/>
      <h1>{text}</h1>
    </div>
  )
}

export default Entry