import React from 'react'

const Search = ({inputVal, onChangeFn}) => {
  return (
    <input
      className='outline-none h-10 bg-beige box-border border-2 border-brown rounded-3xl w-80 px-5 placeholder-italic placeholder-darkbrown text-darkbrown' 
      value={inputVal} 
      placeholder='Search...'
      onChange={onChangeFn}
    />
  )
}

export default Search