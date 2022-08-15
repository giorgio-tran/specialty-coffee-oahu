import React from 'react'

const InputForm = ({ name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}> {name} </label>
      <input name={name} onChange={onChange} />
    </div>
  )
}

export default InputForm