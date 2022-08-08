import React from 'react'

const Search = ({inputVal, onChangeFn}) => {
    return (
        <input
            className='outline-none box-border border-2 border-black' 
            value={inputVal} 
            onChange={onChangeFn}
        />
    )
}

export default Search