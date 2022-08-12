import React from 'react'

const Cafes = ({listOfCafes, cafeListFilter, onClickCafe}) => {
    const filterByCafeName = listOfCafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(cafeListFilter.toLowerCase())
    )

    const mapArray = (array) => {
        return (
            array.map(cafe => 
                <button key={cafe.id} id={cafe.id} onClick={onClickCafe}>
                    {cafe.name}
                </button>
            )
        )
    }

    return (
        <div>
        {cafeListFilter === null
            ? mapArray(listOfCafes)
            : mapArray(filterByCafeName)}
        </div>
    )
}

export default Cafes