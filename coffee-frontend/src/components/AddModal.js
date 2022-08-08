import React from 'react'

const AddModal = ({ open, children, close_AddModal }) => {
    if (!open) {
        return null
    }
    //allows modal to overlap rest of code, which is in root
    return(
        <div className='fixed w-screen h-screen flex justify-center items-center'>
            <div>
                <button className='border-solid border-2' onClick={close_AddModal}> x </button>
                {children}
            </div>
        </div>
    )
}

export default AddModal