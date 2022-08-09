import React from 'react'
import Modal from './Modal'
import ReactDOM from 'react-dom'

const CafeModal = ({open, close, children}) => {
    if (!open) {
        return null
    }
    const modalAppearance =
        <div>
            <button onClick={close}> x </button>
            {children}
        </div>
    
    return ReactDOM.createPortal (
        <Modal children={modalAppearance} />,
        document.getElementById('portal')
    )
}

export default CafeModal