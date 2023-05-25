import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import "./EntryForm.css"
import { useNavigate } from 'react-router-dom'



const EntryForm = (props) => {
  const initInputs = {
    text: [props.text] || ""
  }
  const [inputs, setInputs] = useState(initInputs)
  const {toggleEdit, setToggleEdit, btnText, submit, _id, errMsg} = props
  const {
    user: {
      username
    }, 
    getUserEntries,
    getPrompts,
    prompts,
    prompt
  } = useContext(UserContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(inputs, _id)
    setInputs(initInputs)
    navigate('../profile')
    setToggleEdit(!toggleEdit)
  }

  const { text } = inputs
  return (
    <div className='entryForm'>
      <form onSubmit={handleSubmit}>
        <textarea 
          type="textarea" 
          name="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="Text"
          required
        />
        <p style={{color: "red"}}>{errMsg}</p>
        <button>{btnText}</button>
      </form>
    </div>
  )
}

export default EntryForm