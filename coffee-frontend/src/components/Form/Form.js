import React from 'react'
import InputBox from './InputBox'

const Form = ({ onSubmit, handleName, handleWebsite, handleLocation, handleDescription, close, enterName}) => {
  return (
    <form className='flex flex-col h-full w-full justify-between'
      onSubmit={onSubmit}
    >
      <div className='flex justify-end'>
        <button className='' onClick={close} type='button'> x </button>
      </div>
      <div className='flex flex-col gap-10'>
        <InputBox name='name' onChange={handleName} />
        <InputBox name='website' onChange={handleWebsite} />
        <InputBox name='location' onChange={handleLocation} />
        <InputBox name='description' onChange={handleDescription} />
      </div>
      <div className='flex justify-end gap-2 mb-2'>
        <button 
          className='border-box border-2 border-black' 
          type='button' 
          onClick={close}> 
            cancel 
        </button>
        <button 
          type='submit' 
          className='border-box border-2 border-black'
        > 
          {enterName} 
        </button>
      </div>
    </form>
  )
}

export default Form