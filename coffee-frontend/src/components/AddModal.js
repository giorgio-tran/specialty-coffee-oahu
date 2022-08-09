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
                <div className='box-border border-solid border-2 border-black bg-white h-1/2 w-1/2 py-0 px-2 flex flex-col justify-between'>
                    {/* Header */}
                    <div className='flex justify-end'>
                        <button className='' onClick={close_AddModal}> x </button>
                    </div>
                    {/* Content */}
                    <div>{children}</div>
                    {/* footer */}
                    <div className='flex justify-end gap-2 mb-2'>
                        <button className='border-box border-2 border-black' onClick={close_AddModal}> cancel </button>
                        <button className='border-box border-2 border-black'> add </button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default AddModal