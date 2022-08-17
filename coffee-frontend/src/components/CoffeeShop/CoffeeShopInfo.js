import React from 'react'

const CoffeeShopInfo = ({ coffeeShop, handleDelete, handleEdit }) => {
  const MAP_MODE = 'place'
  const API_KEY = process.env.REACT_APP_API_KEY
  const PARAMETERS = coffeeShop.location + coffeeShop.name
  const url = `https://www.google.com/maps/embed/v1/${MAP_MODE}?key=${API_KEY}&q=${PARAMETERS}`

  return (
    <div>
      <a href={coffeeShop.website} target='_blank' rel='noopener noreferrer'>
        {coffeeShop.name}
      </a>
      <div>
        {coffeeShop.description}
      </div>
      <div>
        <iframe src={url} />
      </div>
      <div className='flex gap-2'>
        <button id={coffeeShop.id} className='border-2 border-black' onClick={handleDelete}> 
          delete 
        </button>
        <button className='border-2 border-black' onClick={handleEdit}> 
          edit 
        </button>
      </div>
    </div>
  )
}

export default CoffeeShopInfo