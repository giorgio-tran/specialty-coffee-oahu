import React from 'react'

const CoffeeShops = ({listOfCoffeeShops, coffeeShopListFilter, onClickCoffeeShop}) => {
  const filterByCoffeeShopName = listOfCoffeeShops.filter((coffeeShop) => 
    coffeeShop.name
      .toLowerCase()
      .includes(coffeeShopListFilter.toLowerCase())
  )

  const mapArray = (array) => {
    return (
      array.map(coffeeShop => {
        return(
          <button 
            className='bg-brown text-white h-44 w-64 text-xl rounded-xl flex items-center justify-center'
            key={coffeeShop.id} 
            id={coffeeShop.id}
            onClick={onClickCoffeeShop}
          >
            <h3 className='w-60 flex items-center justify-center'>
              {coffeeShop.name}
            </h3>
          </button>
        )
      })
    )
  }

  return (
    coffeeShopListFilter === null
      ? mapArray(listOfCoffeeShops)
      : mapArray(filterByCoffeeShopName)
  )
}

export default CoffeeShops