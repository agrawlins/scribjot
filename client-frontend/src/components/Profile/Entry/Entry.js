import React, {useContext, useState} from 'react'
import { UserContext } from '../../../context/UserProvider'
import EntryForm from '../../EntryForm/EntryForm.js'
import "./Entry.css"

const Entry = (props) => {
  const {editEntry, deleteEntry} = useContext(UserContext)
  const {text, creationDate, _id} = props
  const creationYear = creationDate.slice(0, 4)
  const month = creationDate.slice(5, 7)
  const creationDay = creationDate.slice(8, 10)
  const creationHour = creationDate.slice(11, 13)
  const creationMinute = creationDate.slice(14, 16)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)

  let creationMonth
  switch (month) {
    case "01":
      creationMonth = "January"
      break;
    case "02":
      creationMonth = "February"
      break;
    case "03":
      creationMonth = "March"
      break;
    case "04":
      creationMonth = "April"
      break;
    case "05":
      creationMonth = "May"
      break;
    case "06":
      creationMonth = "June"
      break;
    case "07":
      creationMonth = "July"
      break;
    case "08":
      creationMonth = "August"
      break;
    case "09":
      creationMonth = "September"
      break;
    case "10":
      creationMonth = "October"
      break;
    case "11":
      creationMonth = "November"
      break;
    case "12":
      creationMonth = "December"
      break;
    default:
      break;
  }

  return (
    <div className='entry'>
      {toggleEdit ?
      <>
        <EntryForm
          text={text}
          btnText={"Save"}
          toggleEdit = {toggleEdit}
          setToggleEdit = {setToggleEdit}
          submit = {editEntry}
          _id = {_id}
        />
        <button onClick={() => {setToggleEdit(!toggleEdit)}}>Cancel</button>
      </>
      :
      <div className="entry-delete">
        <h2>{creationMonth} {creationDay}, {creationYear}, at {creationHour}:{creationMinute}</h2> <br/>
        <h1>{text}</h1>
        <div>
          {toggleDelete ?
            <>
              <button className='delete-btn' onClick={() => {deleteEntry(props._id)}}>Delete</button>
              <button onClick={() => {setToggleDelete(!toggleDelete)}}>Cancel</button>
            </>
            :
            <>
              <button onClick={() => {setToggleEdit(!toggleEdit)}}>Edit</button>
              <button className='delete-btn' onClick={() => {setToggleDelete(!toggleDelete)}}>Delete</button>
            </>
          }
        </div>
      </div>
      }
    </div>
  )
}

export default Entry