import React from 'react'

const Cafes = ({listOfCafes, cafeListFilter}) => {
    const filterByCafeName = listOfCafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(cafeListFilter.toLowerCase())
    )

    return (
        filterByCafeName.map(cafe => 
            <button key={cafe.name}>
                {cafe.name}
            </button>
        )
    )
}

export default Cafes