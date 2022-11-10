import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import PromptList from './PromptList/PromptList'
import "./EntryForm.css"
import { useNavigate } from 'react-router-dom'

const initInputs = {
  text: []
}


const EntryForm = (props) => {
  const [inputs, setInputs] = useState(initInputs)
  const [togglePrompts, setTogglePrompts] = useState(false)
  const {addEntry, errMsg} = props
  const {
    user: {
      username
    }, 
    getPrompts,
    selectRandomPrompt,
    prompts,
    prompt
  } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    getPrompts()
    // selectRandomPrompt()
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addEntry(inputs)
    setInputs(initInputs)
    navigate('../profile')
  }

  const { text } = inputs
  return (
    <div>
   
      { !togglePrompts ?
        <>
          <button onClick={() => setTogglePrompts(!togglePrompts)}>Need Inspiration?</button>
        </>
        :
        <>
          <h1>Thoughts for Today's Entry:</h1> 
          <h2> <PromptList prompts={prompts}/></h2>
          <button onClick={() => setTogglePrompts(!togglePrompts)}>Feeling Inspired?</button>
        </>
      }
      {/* <button onClick={() => selectRandomPrompt}>Get New Prompt</button> */}
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
        <button>New Entry</button>
      </form>
    </div>
  )
}

export default EntryForm