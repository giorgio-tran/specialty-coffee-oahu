import React from 'react'

const Cafes = ({listOfCafes, cafeListFilter, onClickCafe}) => {
    const filterByCafeName = listOfCafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(cafeListFilter.toLowerCase())
    )

    return (
        filterByCafeName.map(cafe => 
            <button key={listOfCafes.indexOf(cafe)} id={listOfCafes.indexOf(cafe)} onClick={onClickCafe}>
                {cafe.name}
            </button>
        )
    )
}

export default Cafes