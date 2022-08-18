import React from 'react'

const InputBox = ({ name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}> {name} </label>
      <input name={name} onChange={onChange} />
    </div>
  )
}

export default InputBox