import React from 'react'
import ReactDOM from 'react-dom'

const AddModal = ({ open, children, close_AddModal }) => {
    if (!open) {
        return null
    }
    //allows modal to overlap rest of code, which is in root
    return ReactDOM.createPortal(
        <>
            <div className='fixed inset-0 z-40 bg-black/[0.6]'></div>
            <div className='fixed flex justify-center items-center h-screen w-screen z-50 inset-0'>
                <div className='box-border border-solid border-2 border-black bg-emerald-600'>
                    <button className='border-solid border-2 border-black' onClick={close_AddModal}> x </button>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default AddModal