import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import axios from 'axios'
import "./EntryForm.css"

const initInputs = {
  text: ""
}

const EntryForm = (props) => {
  const [inputs, setInputs] = useState(initInputs)
  const [prompt, setPrompt] = useState(initInputs)
  const {addEntry} = props

  // useEffect(() => {
  //   selectRandom()
  // }, [])

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
  }

  const { text } = inputs
  return (
    <form onSubmit={handleSubmit}>

      <button>Get New Prompt</button>
      <textarea 
        type="textarea" 
        name="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Text"/>
      {/* <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/> */}
      <button>New Entry</button>
    </form>
  )
}

export default EntryForm