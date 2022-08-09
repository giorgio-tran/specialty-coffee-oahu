import React from 'react'

const Add = ({openAddModal}) => {
    return (
        <>
            <button className='border-2 border-black rounded w-10' onClick={openAddModal}> + </button>
                {/* <AddModal 
                    open={add_openState} 
                    children="Add Modal" 
                    close_AddModal={add_closeModal}
                /> */}
        </>
    )
}

export default Add