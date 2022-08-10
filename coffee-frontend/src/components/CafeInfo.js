import React from 'react'

const CafeInfo = ({ cafe }) => {
    return (
        <div>
            <a href={cafe.website} target='_blank' rel='noopener noreferrer'>
                {cafe.name}
            </a>
            <div>
                {cafe.description}
            </div>
            <div>
                {cafe.location}
            </div>
        </div>
    )
}

export default CafeInfo