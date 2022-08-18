import React from 'react'
import InputBox from './InputBox'

const Form = ({ onSubmit, handleName, handleWebsite, handleLocation, handleDescription}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputBox name='name' onChange={handleName} />
      <InputBox name='website' onChange={handleWebsite} />
      <InputBox name='location' onChange={handleLocation} />
      <InputBox name='description' onChange={handleDescription} />
    </form>
  )
}

export default Form