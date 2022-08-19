import React from 'react'

const Search = ({inputVal, onChangeFn}) => {
  return (
    <input
      className='outline-none bg-beige box-border border-2 border-brown rounded-3xl w-80 px-5 placeholder-darkbrown' 
      value={inputVal} 
      placeholder='Search...'
      onChange={onChangeFn}
    />
  )
}

export default Search