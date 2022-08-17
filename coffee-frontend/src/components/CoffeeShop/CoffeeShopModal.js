import React from 'react'
import ReactDOM from 'react-dom'
import CoffeeShopInfo from './CoffeeShopInfo'

const CoffeeShopModal = ({open, close, coffeeShop, handleDelete, handleEdit}) => {
  if (!open) {
    return null
  }
    
  return ReactDOM.createPortal (
    <>
      <div className='fixed inset-0 z-40 bg-black/[0.6]'></div>
      <div className='fixed flex justify-center items-center h-screen w-screen z-50 inset-0'>
        <div className='flex flex-col h-1/2 w-1/2 bg-white pt-0 px-4 rounded-md'>
          <div className='flex justify-end'>
            <button onClick={close}> x </button>
          </div>
          <CoffeeShopInfo 
            coffeeShop={coffeeShop} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default CoffeeShopModal