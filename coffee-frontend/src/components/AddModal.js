import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'

const AddModal = ({ open, close }) => {
    if (!open) {
        return null
    }
    const modalAppearance =
		<div className='box-border border-solid border-2 border-black bg-white h-1/2 w-1/2 py-0 px-2 flex flex-col justify-between'>
				{/* Header */}
				<div className='flex justify-end'>
					<button className='' onClick={close}> x </button>
				</div>
				{/* Content */}
				<div>hello</div>
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