import React from 'react'
import Search from './Search'

const Header = ({title, inputValue, onChangeFunction}) => {
  return (
    <div className='flex justify-between'>
      <div> {title} </div>
      <Search 
        inputVal={inputValue}
        onChangeFn={onChangeFunction}
      />
    </div>
  )
}

export default Header