import React from 'react'

const Add = ({openAddModal}) => {
  return (
    <>
      <button className='border-2 border-black rounded w-10' onClick={openAddModal}> + </button>
    </>
  )
}

export default Add