import React from 'react'

const CafeModal = ({open, close, children}) => {
    if (!open) {
        return null
    }
    return (
        <div>
            <button onClick={close}> x </button>
            {children}
        </div>
    )
}

export default CafeModal