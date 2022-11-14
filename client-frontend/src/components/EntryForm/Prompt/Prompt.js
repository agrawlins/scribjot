import React from 'react'

const Prompt = (props) => {
  // const { text, description, imgUrl, _id} = props
  const { text } = props

  return (
    <div className="prompt">
      <h1>{text}</h1>
    </div>
  )
}

export default Prompt