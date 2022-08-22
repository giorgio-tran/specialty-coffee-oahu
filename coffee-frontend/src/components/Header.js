import React from 'react'
import Search from './Search'

const Header = ({title, inputValue, onChangeFunction}) => {
  return (
    <nav className='flex gap-4 justify-between py-10 md:flex-row sm:flex-col xs:flex-col'>
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