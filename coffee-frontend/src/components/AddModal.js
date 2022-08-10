import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'

const AddModal = ({ open, close, children }) => {
    if (!open) {
        return null
    }

	const AddForm = 
		<div>
			<form>
				<input type='text' />
			</form>
		</div>
	
    const modalAppearance =
		<div className='flex flex-col justify-between h-1/2 w-1/2 bg-white pt-0 px-4 rounded-md'>
				{/* Header */}
				<div className='flex justify-end'>
					<button className='' onClick={close}> x </button>
				</div>
				{/* Content */}
				{children}
				{/* footer */}
				<div className='flex justify-end gap-2 mb-2'>
					<button className='border-box border-2 border-black' onClick={close}> cancel </button>
					<button className='border-box border-2 border-black'> add </button>
			</div>
		</div>

    //allows modal to overlap rest of code, which is in root
    return ReactDOM.createPortal(
        <Modal children={modalAppearance}/>,
        document.getElementById('portal')
    )
}

export default AddModal