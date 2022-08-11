import React from 'react'

const Cafes = ({listOfCafes, cafeListFilter, getIdAndOpenModal}) => {
    const filterByCafeName = listOfCafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(cafeListFilter.toLowerCase())
    )

    return (
        filterByCafeName.map(cafe => 
            <button key={cafe.id} id={cafe.id} onClick={getIdAndOpenModal}>
                {cafe.name}
            </button>
        )
    )
}

export default Cafes