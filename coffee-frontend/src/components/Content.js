import React from 'react'
import Add from './Add'
import Cafes from './Cafes'

const Content = ({
    cafes,
    filter,
    openAddModal,
    openCafeModal
}) => {

    return (
        <div className='relative flex gap-4 z-1 bg-slate-400'>
            <Add 
                openAddModal={openAddModal}
            />
            <Cafes
                listOfCafes={cafes}
                cafeListFilter={filter}
                openCafeModal={openCafeModal}
            />
        </div>
    )
}

export default Content