import { useState, useEffect } from 'react'
import cafeService from './services/cafes'
import Content from './components/Content'
import Header from './components/Header'
import AddModal from './components/AddModal'
import CafeModal from './components/CafeModal'
import './index.css'

const App = () => {

  //states
  const [newFilter, setNewFilter] = useState('')
  const [cafes, setCafes] = useState([])
  const [addIsOpen, setAddIsOpen] = useState(false)
  const [cafeIsOpen, setCafeIsOpen] = useState(false)
  const [cafeId, setCafeId] = useState(0)

  useEffect(() => {
    cafeService
      .getAll()
      .then(response => {
        console.log('test passed')
        setCafes(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }

  const handleCafe = (event) => {
    setCafeId(event.target.id)
    setCafeIsOpen(true)
  }

  const selectedCafe = cafes[cafeId]
  
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
          getIdAndOpenModal={handleCafe}
        />
        <AddModal 
          open={addIsOpen}
          close={() => setAddIsOpen(false)}
          children='hello'
        />
        <CafeModal 
          open={cafeIsOpen}
          close={() => setCafeIsOpen(false)}
          children={selectedCafe}
        />
      </div>
    </div>
  )
}

export default App
