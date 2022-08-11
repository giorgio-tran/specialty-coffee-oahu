import React from 'react'
import Add from './Add'
import Cafes from './Cafes'

const Content = ({
    cafes,
    filter,
    openAddModal,
    onClickCafe
}) => {

    return (
        <div className='relative flex gap-4 z-1 bg-slate-400'>
            <Add 
                openAddModal={openAddModal}
            />
            <Cafes
                listOfCafes={cafes}
                cafeListFilter={filter}
                onClickCafe={onClickCafe}
            />
        </div>
    )
}

export default Content