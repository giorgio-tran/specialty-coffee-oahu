import React from 'react'

const Cafes = ({listOfCafes, cafeListFilter, openCafeModal}) => {
    const filterByCafeName = listOfCafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(cafeListFilter.toLowerCase())
    )

    return (
        filterByCafeName.map(cafe => 
            <button key={cafe.name} onClick={openCafeModal}>
                {cafe.name}
            </button>
        )
    )
}

export default Cafes