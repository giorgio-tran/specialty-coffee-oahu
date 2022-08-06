import React from 'react'
import Add from './Add'

const Content = ({content_cafes, content_filter}) => {
    //filters based on name
    const filterByCafeName = content_cafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(content_filter.toLowerCase())
    )

    const filteredCafes = filterByCafeName.map((cafe) => {
        return (
            <button key={cafe.name}> 
                {cafe.name}
            </button>
        )
    })

    return (
        <>
            <Add />
            {filteredCafes}
        </>
    )
}

export default Content