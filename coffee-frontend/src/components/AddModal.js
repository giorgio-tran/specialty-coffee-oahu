import React from 'react'

const AddModal = ({ open, children, close_AddModal }) => {
    if (!open) {
        return null
    }
    //allows modal to overlap rest of code, which is in root
    return(
        <div className='text 3xl'>
            <button onClick={close_AddModal}> x </button>
            {children}
        </div>
    )
}

export default AddModal