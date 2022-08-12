import { useState, useEffect } from 'react'
import cafeService from './services/cafes'
import Content from './components/Content'
import Header from './components/Header'
import AddModal from './components/Add/AddModal'
import CafeModal from './components/Cafe/CafeModal'
import EditModal from './components/Edit/EditModal'
import './index.css'

const App = () => {

  //states
  const [newFilter, setNewFilter] = useState('')
  const [cafes, setCafes] = useState([])
  const [addIsOpen, setAddIsOpen] = useState(false)
  const [editIsOpen, setEditIsOpen] = useState(false)
  const [cafeIsOpen, setCafeIsOpen] = useState(false)
  const [cafeIndex, setCafeIndex] = useState(0)

  useEffect(() => {
    cafeService
      .getAll()
      .then(initialCafes => {
        console.log('connected to db')
        setCafes(initialCafes)
      })
  }, [])

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }
  const handleCafeSubmission = (event, cafe) => {
    cafeService
      .create(cafe)
      .then(returnedCafe => {
        setCafes(cafes.concat(returnedCafe))
        console.log(`added ${returnedCafe.toString()}`)
      })
  }
  const handleEditSubmission = (event) => {
    console.log(event.target.id)
  }
  const handleDelete = (event) => {
    event.preventDefault()
    cafeService
    .remove(event.target.id)
    .then(() => {
      setCafeIsOpen(false)
      setCafes(cafes.filter(cafe => cafe.id !== parseInt(event.target.id)))
    })
  }
  const handleEdit = () => {
    setEditIsOpen(true)
  }
  const handleCafe = (event) => {
    setCafeIndex(event.target.id)
    setCafeIsOpen(true)
  }
  
  return (
    <div className='w-screen h-screen flex justify-center'>
      <div className='w-2/3'>
        <Header 
          title="Specialty Coffee Oahu" 
          inputValue={newFilter}
          onChangeFunction={handleFilterChange}
        />
        <Content 
          cafes={cafes}
          filter={newFilter}
          openAddModal={() => setAddIsOpen(true)}
          onClickCafe={handleCafe}
        />
        <AddModal 
          open={addIsOpen}
          close={() => setAddIsOpen(false)}
          handleCafeSubmission={handleCafeSubmission}
        />
        <CafeModal 
          open={cafeIsOpen}
          close={() => setCafeIsOpen(false)}
          cafe={cafes.filter(cafe => cafe.id === parseInt(cafeIndex))[0]}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <EditModal
          open={editIsOpen}
          close={() => setEditIsOpen(false)}
          handleEditSubmission={handleEditSubmission}
        />
      </div>
    </div>
  )
}

export default App
