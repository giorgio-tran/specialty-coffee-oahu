import React from 'react'

const Add = ({openAddModal}) => {
  return (
    <button 
      className='bg-brown text-white h-44 w-64 text-6xl' 
      onClick={openAddModal}> 
        + 
    </button>
  )
}

export default Add