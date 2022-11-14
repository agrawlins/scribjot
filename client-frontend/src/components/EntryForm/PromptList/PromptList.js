import React from 'react'
import Prompt from '../Prompt/Prompt.js'

const PromptList = (props) => {
  const {prompts} = props

  return (
    <div className="prompt-list">
      {prompts.map(prompt => <Prompt {...prompt} key={prompt._id}/>)}
    </div>
  )
}

export default PromptList