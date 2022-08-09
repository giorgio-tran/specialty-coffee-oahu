import React from 'react'
import Add from './Add'
import Cafes from './Cafes'

const Content = ({
    content_cafes, 
    content_filter, 
    content_add_open,
    content_add_openState,
    content_add_openModal,
    content_add_closeModal,
    content_cafe_openCafeModal
}) => {

    return (
        <div className='relative flex gap-4 z-1 bg-red-100'>
            <Add 
                add_openState={content_add_openState}
                add_openModal={content_add_openModal}
                add_closeModal={content_add_closeModal}
                add_open_Modal={content_add_open}
                
            />
            <Cafes
                listOfCafes={content_cafes}
                cafeListFilter={content_filter}
                openCafeModal={content_cafe_openCafeModal}
            />
        </div>
    )
}

export default Content