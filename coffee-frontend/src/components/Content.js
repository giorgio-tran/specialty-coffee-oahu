import React from 'react'

const Content = ({content_cafes, content_filter}) => {
    
    const filterByCafeName = content_cafes.filter((cafe) => {
            return (
                cafe.name
                    .toLowerCase()
                    .includes(content_filter.toLowerCase())
            )
        }
    
    )

    return (
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