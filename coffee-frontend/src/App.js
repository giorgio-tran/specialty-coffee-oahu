import { useState, useEffect } from 'react'
import cafesList from './dummyData'
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

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }

  const handleCafes = () => {
    setCafes(cafesList)
    console.log(cafes)
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
          cafes={cafesList}
          filter={newFilter}
          openAddModal={() => setAddIsOpen(true)}
          openCafeModal={() => setCafeIsOpen(true)}
        />
        <AddModal 
          open={addIsOpen}
          close={() => setAddIsOpen(false)}
          children='testing'
        />
        <CafeModal 
          open={cafeIsOpen}
          close={() => setCafeIsOpen(false)}
          children='hello world'
        />
      </div>
    </div>
  )
}

export default App
