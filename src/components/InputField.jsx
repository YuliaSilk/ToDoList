import React from 'react'

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(evt) => handleInput(evt.target.value)}/>
      <button onClick={handleSubmit}>Add ToDo</button>
     </label>
  )
}

export default InputField;