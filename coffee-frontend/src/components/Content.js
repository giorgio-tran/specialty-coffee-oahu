import React from 'react'

const Content = ({content_cafes}) => {

    return (
        content_cafes.map((cafe) => {
            return (
                <button key={cafe.name}> 
                    {cafe.name}
                </button>
            )
        })
    )
}

export default Content