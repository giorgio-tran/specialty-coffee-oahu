import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../Form/Form'

const AddModal = ({ open, close, handleCoffeeShopSubmit }) => {
  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const coffeeShopObj = {
    name: name,
    website: website,
    location: location,
    description: description,
  }
	
  const handleOnSubmit = event => {
    event.preventDefault()
    handleCoffeeShopSubmit(event, coffeeShopObj)
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
        <div className='flex flex-col h-1/2 w-1/2 bg-white pt-0 px-4 rounded-md'>
          {/* Header */}
          <div className='flex justify-end'>
            <button className='' onClick={close}> x </button>
          </div>
          {/* Content */}
          <Form
            onSubmit={handleOnSubmit}
            handleName={handleName}
            handleWebsite={handleWebsite}
            handleLocation={handleLocation}
            handleDescription={handleDescription}
            close={close}
            enterName="add"
          />
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default AddModal