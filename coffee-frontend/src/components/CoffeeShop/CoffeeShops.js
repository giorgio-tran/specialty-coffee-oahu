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
            className='bg-brown text-white'
            key={coffeeShop.id} 
            id={coffeeShop.id}
            onClick={onClickCoffeeShop}
          >
            {coffeeShop.name}
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