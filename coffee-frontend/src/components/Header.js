import React from 'react'
import Search from './Search'

const Header = ({title, inputValue, onChangeFunction}) => {
  return (
    <nav className='flex justify-between py-10'>
      <h1 className='text-3xl font-bold text-darkbrown'> 
        {title} 
      </h1>
      <Search 
        inputVal={inputValue}
        onChangeFn={onChangeFunction}
      />
    </nav>
  )
}

export default Header