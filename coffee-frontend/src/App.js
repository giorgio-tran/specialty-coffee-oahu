import { useState, useEffect } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import cafesList from './dummyData'
import './index.css'
import CafeModal from './components/CafeModal'

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
          content_add_openState={addIsOpen}
          content_add_openModal={() => setAddIsOpen(true)}
          content_add_closeModal={() => setAddIsOpen(false)}
          content_cafes={cafesList}
          content_filter={newFilter}
          content_cafe_openCafeModal={() => setCafeIsOpen(true)}
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
