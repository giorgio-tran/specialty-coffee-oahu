import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import CafeInfo from './CafeInfo'

const CafeModal = ({open, close, children}) => {
    if (!open) {
        return null
    }
    const modalAppearance =
        <div>
            <button onClick={close}> x </button>
            <CafeInfo cafe={children} />
        </div>
    
    return ReactDOM.createPortal (
        <Modal children={modalAppearance} />,
        document.getElementById('portal')
    )
}

export default CafeModal