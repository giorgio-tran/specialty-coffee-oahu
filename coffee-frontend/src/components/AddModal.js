import React from 'react'

const AddModal = ({ open, children, close_AddModal }) => {
    if (!open) {
        return null
    }
    return (
        <div>
            <button onClick={close_AddModal}> x </button>
            {children}
        </div>
    )
}

export default AddModal