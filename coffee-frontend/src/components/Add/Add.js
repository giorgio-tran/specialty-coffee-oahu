import React from 'react'

const Add = ({openAddModal}) => {
  return (
    <button 
      className='bg-brown border-2 border-white text-white font-extralight h-44 text-6xl rounded-xl flex items-center justify-center' 
      onClick={openAddModal}>
      <h1 className='h-16'>
        +
      </h1>
    </button>
  )
}

export default Add