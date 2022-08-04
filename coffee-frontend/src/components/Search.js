import React from 'react'

const Search = ({inputVal, onChangeFn}) => {
    return (
        <input 
            value={inputVal} 
            onChange={onChangeFn}
        />
    )
}

export default Search