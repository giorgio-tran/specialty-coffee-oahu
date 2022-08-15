import React from 'react'

const CafeInfo = ({ cafe, handleDelete, handleEdit }) => {
  return (
    <div>
      <a href={cafe.website} target='_blank' rel='noopener noreferrer'>
        {cafe.name}
      </a>
      <div>
        {cafe.description}
      </div>
      <div>
        {cafe.location}
      </div>
      <div className='flex gap-2'>
        <button id={cafe.id} className='border-2 border-black' onClick={handleDelete}> 
                        delete 
        </button>
        <button className='border-2 border-black' onClick={handleEdit}> 
                    edit 
        </button>
      </div>
    </div>
  )
}

export default CafeInfo