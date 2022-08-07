import React from 'react'
import Add from './Add'
import Cafes from './Cafes'

const Content = ({content_cafes, content_filter}) => {

    return (
        <div>
            <Add />
            <Cafes
                listOfCafes={content_cafes}
                cafeListFilter={content_filter}
            />
        </div>
    )
}

export default Content