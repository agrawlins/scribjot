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
  const [selectedPrompt, setSelectedPrompt] = useState("")
  const {addEntry, errMsg} = props
  const {
    user: {
      username
    }, 
    getPrompts,
    prompts,
    prompt
  } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    getPrompts()
  }, [])

  const selectRandomPrompt = () => {
    let picked = prompts[Math.floor(Math.random() * prompts.length)]
    setSelectedPrompt(picked.text)
    setTogglePrompts(!togglePrompts)
  }

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
      {/* { !togglePrompts ?
        <>
          <button onClick={() => selectRandomPrompt()}>Need Inspiration?</button>
        </>
        :
        <>
          <button onClick={() => setTogglePrompts(!togglePrompts)}>Feeling Inspired?</button>
          <h1>Thought for Today's Entry:</h1> 
          <h2>{selectedPrompt}</h2>
        </>
      } */}
      <h1>Thought for Today's Entry:</h1> 
      <button onClick={() => selectRandomPrompt()}>Get New Prompt</button>
        <h2>{selectedPrompt}</h2>
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