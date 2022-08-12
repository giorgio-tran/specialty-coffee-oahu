import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import CafeInfo from './CafeInfo'

const CafeModal = ({open, close, cafe}) => {
    if (!open) {
        return null
    }
    const modalAppearance =
        <div className='flex flex-col h-1/2 w-1/2 bg-white pt-0 px-4 rounded-md'>
            <div className='flex justify-end'>
                <button onClick={close}> x </button>
            </div>
            <CafeInfo cafe={cafe} />
            <div className='flex gap-2'>
                <button className='border-2 border-black'> 
                        delete 
                </button>
                <button className='border-2 border-black'> 
                    edit 
                </button>
            </div>
        </div>
    
    return ReactDOM.createPortal (
        <Modal children={modalAppearance} />,
        document.getElementById('portal')
    )
}

export default CafeModal