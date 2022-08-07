import React from 'react'
import AddModal from './AddModal'

const Add = ({add_openState, add_openModal, add_closeModal}) => {
    return (
        <>
            <button className='border-2 border-black' onClick={add_openModal}> + </button>
                <AddModal 
                    open={add_openState} 
                    children="Add Modal" 
                    close_AddModal={add_closeModal}
                />
        </>
    )
}

export default Add