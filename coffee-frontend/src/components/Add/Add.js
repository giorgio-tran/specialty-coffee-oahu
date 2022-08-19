import React from 'react'

const Add = ({openAddModal}) => {
  return (
    <>
      <button className='border-2 border-black rounded' onClick={openAddModal}> + </button>
    </>
  )
}

export default Add