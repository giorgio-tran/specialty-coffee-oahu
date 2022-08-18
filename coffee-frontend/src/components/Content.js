import React from 'react'
import Add from './Add/Add'
import CoffeeShops from './CoffeeShop/CoffeeShops'

const Content = ({
  coffeeShops,
  filter,
  openAddModal,
  onClickCoffeeShop
}) => {

  return (
    <div className='relative flex gap-4 z-1'>
      <Add 
        openAddModal={openAddModal}
      />
      <CoffeeShops
        listOfCoffeeShops={coffeeShops}
        coffeeShopListFilter={filter}
        onClickCoffeeShop={onClickCoffeeShop}
      />
    </div>
  )
}

export default Content