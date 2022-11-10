import React from 'react'

const Entry = (props) => {
  // const { text, description, imgUrl, _id} = props
  const { text, creationDate, imgUrl} = props
  return (
    <div className="entry">
      <h1>{creationDate}</h1>
      <h1>{text}</h1>
      {/* <h3>{description}</h3>
      <img src={imgUrl} alt={imgUrl} width={300}/> */}
    </div>
  )
}

export default Entry