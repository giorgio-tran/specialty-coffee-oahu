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
    <div className='relative z-1 grid md:grid-cols-3 sm:grid-cols-1 gap-4 h-4/5 scrollbar overflow-y-auto'>
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