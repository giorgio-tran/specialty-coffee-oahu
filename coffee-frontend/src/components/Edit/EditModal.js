import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import InputForm from './InputForm'

const EditModal = ({ open, close, handleEditSubmission }) => {
  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const cafeObj = {
    name: name,
    website: website,
    location: location,
    description: description,
  }
	
  const handleOnSubmit = event => {
    event.preventDefault()
    handleEditSubmission(event, cafeObj)
    event.target.reset()
  }
  const handleName = event => setName(event.target.value)
  const handleWebsite = event => setWebsite(event.target.value)
  const handleLocation = event => setLocation(event.target.value)
  const handleDescription = event => setDescription(event.target.value)


  if (!open) {
    return null
  }

  //allows modal to overlap rest of code, which is in root
  return ReactDOM.createPortal(
    <>
      <div className='fixed inset-0 z-40 bg-black/[0.6]' />
      <div className='fixed flex justify-center items-center h-screen w-screen z-50 inset-0'>
        <div className='flex flex-col justify-between h-1/2 w-1/2 bg-white pt-0 px-4 rounded-md'>
          {/* Header */}
          <div className='flex justify-end'>
            <button className='' onClick={close}> x </button>
          </div>
          {/* Content */}
          <div>
            {/* passes cafeObj to parent */}
            <form onSubmit={handleOnSubmit}>
              <InputForm name='name' onChange={handleName} />
              <InputForm name='website' onChange={handleWebsite} />
              <InputForm name='location' onChange={handleLocation} />
              <InputForm name='description' onChange={handleDescription} />
              <div className='flex justify-end gap-2 mb-2'>
                <button className='border-box border-2 border-black' type='button' onClick={close}> cancel </button>
                <button type='submit' className='border-box border-2 border-black'> save </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default EditModal