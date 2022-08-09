import { useState, useEffect } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import './index.css'
import cafesList from './dummyData'

const App = () => {

  //states
  const [newFilter, setNewFilter] = useState('')
  const [cafes, setCafes] = useState([])
  const [addIsOpen, setAddIsOpen] = useState(false)

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
        />
      </div>
    </div>
  )
}

export default App
