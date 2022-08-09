import React from 'react'

const Modal = ({ children }) => {
    //allows modal to overlap rest of code, which is in root
    return (
        <>
            <div className='fixed inset-0 z-40 bg-black/[0.6]'></div>
            <div className='fixed flex justify-center items-center h-screen w-screen z-50 inset-0'>
               {children}
            </div>
        </>
    )
}

export default Modal