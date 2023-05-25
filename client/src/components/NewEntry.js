import React, {useState, useEffect, useContext} from 'react'
import EntryForm from './EntryForm/EntryForm.js'
import { UserContext } from '../context/UserProvider.js'
import './NewEntry.css'

// import EntryList from './EntryList.js'
// import Entry from './Entry.js'

const NewEntry = () => {
  const {
    user: {
      username
    }, 
    addEntry,
    getPrompts, 
    prompts
  } = useContext(UserContext)

  const [togglePrompts, setTogglePrompts] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState("")

  useEffect(() => {
    getPrompts()
  }, [])

  const selectRandomPrompt = () => {
    let picked = prompts[Math.floor(Math.random() * prompts.length)]
    setSelectedPrompt(picked.text)
    setTogglePrompts(!togglePrompts)
  }

  return (
    <div className="newEntry">
      <h1>Create a New Entry</h1>
      <button onClick={() => selectRandomPrompt()}>Get New Prompt</button>
      <h1>Thought for Today's Entry:</h1> 
      <h2>{selectedPrompt}</h2>
      <EntryForm
        submit = {addEntry}
        btnText = {"New Entry"}
      />
    </div>
  )
}

export default NewEntry