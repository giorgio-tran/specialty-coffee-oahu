import React from 'react'

const Content = ({content_cafes, content_filter}) => {
    //filters based on name
    const filterByCafeName = content_cafes.filter((cafe) => 
        cafe.name
            .toLowerCase()
            .includes(content_filter.toLowerCase())
    )

    return (
        //returns buttons
        filterByCafeName.map((cafe) => {
            return (
                <button key={cafe.name}> 
                    {cafe.name}
                </button>
            )
        })
    )
}

export default Content