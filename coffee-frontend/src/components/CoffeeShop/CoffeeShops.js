import React from 'react'

const CoffeeShops = ({listOfCoffeeShops, coffeeShopListFilter, onClickCoffeeShop}) => {
  const filterByCoffeeShopName = listOfCoffeeShops.filter((coffeeShop) => 
    coffeeShop.name
      .toLowerCase()
      .includes(coffeeShopListFilter.toLowerCase())
  )

  const mapArray = (array) => {
    return (
      array.map(coffeeShop => 
        <button key={coffeeShop.id} id={coffeeShop.id} onClick={onClickCoffeeShop}>
          {coffeeShop.name}
        </button>
      )
    )
  }

  return (
    <div className='flex gap-2'>
      {coffeeShopListFilter === null
        ? mapArray(listOfCoffeeShops)
        : mapArray(filterByCoffeeShopName)}
    </div>
  )
}

export default CoffeeShops